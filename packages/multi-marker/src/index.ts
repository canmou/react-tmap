import React, { useImperativeHandle } from "react";
import { OverlayProps } from "@canmou/react-tmap-map";
import { useMultiMarker } from "./useMultiMarker";

export * from "./useMultiMarker";
export interface MultiMarkerProps
  extends OverlayProps,
    TMap.MultiMarkerEvents,
    TMap.MultiMarkerOptions {
  /** 覆盖物是否可见 */
  visiable?: boolean;
}

export const MultiMarker = React.forwardRef<MultiMarkerProps, MultiMarkerProps>(
  (props, ref) => {
    const { multiMarker } = useMultiMarker(props);
    useImperativeHandle(ref, () => ({ ...props, multiMarker }), [
      multiMarker,
      props,
    ]);
    return null;
  }
);
