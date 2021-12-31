/// <reference types="@canmou/react-tmap-types" />
import { useEffect, useMemo, useState } from "react";
import { useSettingProperties, useEventProperties } from '@canmou/react-tmap-utils';
import { MapProps } from '.';


export interface OverlayProps extends MapChildProps { }
export interface MapChildProps {
    TMap?: typeof TMap;

    map?: TMap.Map;
}


export interface UseMap extends MapProps, MapChildProps {
    container?: HTMLDivElement | null;
}

export const useMap = (props: Partial<UseMap> = {}) => {
    const { ...other } = props;
    const [map, setMap] = useState<TMap.Map>();
    const [zoom, setZoom] = useState(props.zoom || 15);
    const [container, setContainer] = useState(props.container);
    useEffect(() => {
        let instance: any;
        if (container && !map && window.TMap) {
            delete other.container;
            console.log({
                zoom,
                ...other,
            });
            instance = new TMap.Map(container, { zoom, ...other })
            // const center = [113.23, 23.16];
            // var center2 = new TMap.LatLng(center[1], center[0]);
            // instance = new TMap.Map(container, {
            //     zoom,//设置地图缩放级别
            //     center: center2,//设置地图中心点坐标
            //     mapStyleId: 'style1',//个性化样式
            //     baseMap: {
            //         type: "vector",
            //         features: ["base", "point"], // 隐藏矢量文字
            //     },
            //     minZoom: 16,
            //     maxZoom: 20,
            //     toggleAnimation: false,
            //     doubleClickZoom: false,
            //     viewMode: '2D',
            //     showControl: false,
            //     businessSelectText: '',
            //     // zoomControl: false,
            //     // mapTypeControl: false
            // });
            // instance.setViewMode('2D');
            // if (!instance.getControl(TMap.constants.DEFAULT_CONTROL_ID.ZOOM)) { // 如果map上不存在该控件则直接返回
            //     return;
            // }
            // instance.removeControl(TMap.constants.DEFAULT_CONTROL_ID.ZOOM);
            // instance.on('zoom_changed', Dobound.use(() => {
            //     console.log('zoom_changed');
            //     setZoom(zoom);
            // }));
            // instance.on('zoom_changed', () => {
            //     console.log('zoom_changed');
            //     setZoom(zoom);
            // });
            setMap(instance);
        }
        return () => {
            if (instance) {
                setMap(undefined);
            }
        }
    }, [container]);

    useMemo(() => {
        if (map && typeof props.zoom === 'number' && zoom !== props.zoom && props.zoom >= 2 && props.zoom <= 20) {
            setZoom(props.zoom);
            map.setZoom(props.zoom);
        }
    }, [zoom, props.zoom]);

    useSettingProperties<TMap.Map, UseMap>(map!, props, [
        'Zoom',
        'Layers',
        'Center',
        'City',
        'Rotation',
        'Pitch',
        'Scale',
        'Offset',
        'Draggable',
        'Scrollable',
        'MaxZoom',
        'MinZoom',
        'Pitchable',
        'Rotatable',
        'DoubleClickZoom',
        'Boundary',
        'ViewMode',
        'BaseMap',
        'MapStyleId',
    ]);

    useEventProperties<TMap.Map, UseMap>(map!, props, [
        'onMouseMove',
        'onZoomChange',
        'onMapMove',
        'onMouseWheel',
        'onZoomStart',
        'onMouseOver',
        'onMouseOut',
        'onDblClick',
        'onClick',
        'onZoomEnd',
        'onMoveEnd',
        'onMouseUp',
        'onMouseDown',
        'onRightClick',
        'onMoveStart',
        'onDragStart',
        'onDragging',
        'onDragEnd',
        'onHotspotOut',
        'onHotspotOver',
        'onTouchStart',
        'onComplete',
        'onHotspotClick',
        'onTouchMove',
        'onTouchEnd',
        'onResize',
    ]);

    return {
        map,
        setMap,
        container,
        setContainer,
    }
}
