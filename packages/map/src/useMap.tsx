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
        'Scrollwheel',
        'MaxZoom',
        'MinZoom',
        'Pitchable',
        'Rotatable',
        'DisableDoubleClickZoom',
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
        'onCenter_Changed',
        'onZoom_Changed',
        'onBounds_Changed',
    ]);

    return {
        map,
        setMap,
        container,
        setContainer,
    }
}
