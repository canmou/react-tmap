import { useEffect, useMemo, useState } from 'react';
import { VisualizationHeatProps } from '.';

export interface UseVisualizationHeat extends VisualizationHeatProps { };
export const useVisualizationHeat = (props = {} as UseVisualizationHeat) => {
    const { map, visiable, ...other } = props;
    // let position = latLng && new TMap.LatLng(latLng.lat, latLng.lng);
    const [isOpen, setIsOpen] = useState(visiable);
    const [visualizationHeat, setVisualizationHeat] = useState<TMap.visualization.Heat>();
    useEffect(() => {
        if (!TMap || !map) return;
        if (!visualizationHeat) {
            debugger;
            let instance: TMap.visualization.Heat = new TMap.visualization.Heat({
                ...other,
            });
            setVisualizationHeat(instance);
            if (isOpen) {
                instance.addTo(map);
                instance.show();
            }
            return () => {
                if (instance) {
                    // 销毁图层对象
                    instance.destroy();
                    setVisualizationHeat(undefined);
                }
            }
        }
    }, [map]);


    useMemo(() => {
        if (isOpen !== visiable && visualizationHeat && map) {
            setIsOpen(visiable);
            if (visiable) {
                visualizationHeat.show();
            } else {
                visualizationHeat.hide();
            }
        }
    }, [visiable, visualizationHeat]);

    // useSettingProperties<TMap.InfoWindow, UseInfoWindow>(infoWindow!, props);
    // useEventProperties<TMap.InfoWindow, UseInfoWindow>(infoWindow!, props);
    return {
        visualizationHeat,
        setVisualizationHeat
    };
}