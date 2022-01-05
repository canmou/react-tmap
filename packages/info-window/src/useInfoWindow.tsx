import { useEffect, useMemo, useState } from "react";
import { InfoWindowProps } from ".";
import { useEventProperties, useSettingProperties } from '@canmou/react-tmap-utils';

export interface UseInfoWindow extends InfoWindowProps { };
// export interface UseInfoWindow extends InfoW
export const useInfoWindow = (props = {} as UseInfoWindow) => {
    const { map, visiable, latLng, ...other } = props;
    let position = latLng && new TMap.LatLng(latLng.lat, latLng.lng);
    const [isOpen, setIsOpen] = useState(visiable);
    const [infoWindow, setInfoWindows] = useState<TMap.InfoWindow>();
    useEffect(() => {
        if (!TMap || !map) return;
        if (!infoWindow) {
            const positionCenter = map.getCenter();
            let instance: TMap.InfoWindow = new TMap.InfoWindow({
                ...other,
                map,
                position: position || positionCenter,
            });
            setInfoWindows(instance);
            if (isOpen) {
                instance.open();
            }
            return () => {
                if (instance) {
                    // map && map.(instance);
                    // 销毁消息窗体
                    instance.destroy();
                    setInfoWindows(undefined);
                }
            }
        }
    }, [map]);

    useMemo(() => {
        if (isOpen !== visiable && infoWindow && map) {
            setIsOpen(visiable);
            if (visiable) {
                infoWindow.open();
            } else {
                infoWindow.close();
            }
        }
    }, [visiable, infoWindow]);


    useEffect(() => {
        if (!map || !infoWindow || !visiable) return;
        const positionCenter = map.getCenter();
        infoWindow.setPosition(position || positionCenter);
        infoWindow.open();
    }, [position]);

    useSettingProperties<TMap.InfoWindow, UseInfoWindow>(infoWindow!, props);
    useEventProperties<TMap.InfoWindow, UseInfoWindow>(infoWindow!, props);

    return {
        infoWindow,
        setInfoWindows,
    }
}