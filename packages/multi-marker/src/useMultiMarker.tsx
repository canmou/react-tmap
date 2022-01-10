import { useEffect, useState } from "react";
import { useEventProperties, useSettingProperties } from "@canmou/react-tmap-utils";
import { MultiMarkerProps } from "src";

export interface UseMultiMarker extends MultiMarkerProps { }
export const useMultiMarker = (props = {} as UseMultiMarker) => {
    const { map, visiable, ...other } = props;
    const { styles, geometries } = other || {};
    const [multiMarker, setMultiMarker] = useState<TMap.MultiMarker>();
    useEffect(() => {
        if (!TMap || !map) return;
        if (!multiMarker) {
            let initStyle = styles;
            if (!initStyle) {
                initStyle = {
                    id: 'multiMarker-test',
                    width: 20,
                    height: 30,
                    anchor: { x: 10, y: 30 },
                    src: 'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerDefault.png', // 标记路径
                };
            }
            let initGeometries = geometries;
            if (!initGeometries) {
                const mapCenter = map.getCenter();
                initGeometries = [
                    {
                        // 标记位置(经度，纬度，高度)
                        // position: new TMap.LatLng(39.98210863924864, 116.31310899739151),
                        // 默认中心点
                        position: mapCenter,
                    },
                ]
            } else {
                initGeometries = geometries.map((e: { position: TMap.LatLng; lat?: number; lng?: number; }) => {
                    if (e.lat && e.lng) {
                        e.position = new TMap.LatLng(e.lat, e.lng);
                        delete e.lat;
                        delete e.lng;
                        return e;
                    } else {
                        return e;
                    }
                })
            }
            let instance: TMap.MultiMarker = new TMap.MultiMarker({
                styles: {
                    marker: new TMap.MarkerStyle(initStyle),
                },
                geometries: initGeometries,
            }).setMap(map);
            setMultiMarker(instance);
            return () => {
                if (instance) {
                    instance.setMap(null);
                    setMultiMarker(undefined);
                }
            }
        }
    }, [map]);

    // useVisiable(multiMarker!, visiable);
    useSettingProperties<TMap.MultiMarker, UseMultiMarker>(multiMarker!, props, [
        'Map',
        'Geometries',
        'Styles',
        'Visible',
    ]);

    useEventProperties<TMap.MultiMarker, UseMultiMarker>(multiMarker!, props, [
        'onClick',
        'onDblClick',
        'onMouseMove',
        'onMouseOut',
        'onMouseUp',
        'onMouseDown',
        'onMouseOver',
        'onTouchStart',
        'onTouchEnd',
    ]);

    return { multiMarker, setMultiMarker };
    // return {}
}