import React, {
    useEffect,
    useImperativeHandle,
    useMemo,
    Fragment,
  } from "react";
import { render } from "react-dom";
import { OverlayProps } from "@canmou/react-tmap-map";
import { useVisualizationHeat } from "./useVisualizationHeat";

export * from './useVisualizationHeat';
export interface VisualizationHeatProps extends OverlayProps, TMap.HeatEvent, TMap.HeatOptions {
    // 是否可见
    visiable?: boolean;
}

export const Heat = React.forwardRef<VisualizationHeatProps, VisualizationHeatProps>((props, ref) => {
    const { children } = props;
    const container = useMemo(() => document.createElement("div"), []);
    useEffect(() => render(<Fragment>{children}</Fragment>, container), [children]);
    const { visualizationHeat } = useVisualizationHeat({
        ...props,
    });
    useImperativeHandle(ref, () => ({ ...props, visualizationHeat }));
    return null;
});