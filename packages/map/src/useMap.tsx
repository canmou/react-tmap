import { useEffect, useState } from "react";
// import { Dobound } from "../../util/common";

export interface MapChildProps {
    TMap?: typeof TMap;
}

export interface MapProps {
    zoom: any;
}

export interface UseMap extends MapProps, MapChildProps {
    container: HTMLDivElement | null;
}

export const useMap = (props: Partial<UseMap> = {}) => {
    const [zoom, setZoom] = useState(props.zoom || 15);
    const [container, setContainer] = useState(props.container);
    const [map, setMap] = useState<any>();
    // const { ...other } = props;

    useEffect(() => {
        let instance: any;
        const center = [113.23, 23.16];
        var center2 = new TMap.LatLng(center[1], center[0]);
        if (container && !map && TMap) {
            instance = new TMap.Map(container, {
                zoom,//设置地图缩放级别
                center: center2,//设置地图中心点坐标
                mapStyleId: 'style1',//个性化样式
                baseMap: {
                    type: "vector",
                    features: ["base", "point"], // 隐藏矢量文字
                },
                minZoom: 16,
                maxZoom: 20,
                toggleAnimation: false,
                doubleClickZoom: false,
                viewMode: '2D',
                showControl: false,
                businessSelectText: '',
                // zoomControl: false,
                // mapTypeControl: false
            });
            instance.setViewMode('2D');
            if (!instance.getControl(TMap.constants.DEFAULT_CONTROL_ID.ZOOM)) { // 如果map上不存在该控件则直接返回
                return;
            }
            instance.removeControl(TMap.constants.DEFAULT_CONTROL_ID.ZOOM);
            // instance.on('zoom_changed', Dobound.use(() => {
            //     console.log('zoom_changed');
            //     setZoom(zoom);
            // }));
            instance.on('zoom_changed', () => {
                console.log('zoom_changed');
                setZoom(zoom);
            });
            setMap(instance);
        }
        return () => {
            if (instance) {
                setMap(undefined);
            }
        }
    }, [container]);

    return {
        map,
        setMap,
        container,
        setContainer,
    }
}
