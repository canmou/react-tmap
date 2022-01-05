import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  Fragment,
} from "react";
import { render } from "react-dom";
import { OverlayProps } from "@canmou/react-tmap-map";
import { useInfoWindow } from "./useInfoWindow";

export * from "./useInfoWindow";
export interface InfoWindowProps
  extends OverlayProps,
    TMap.InfoWindowEvents,
    TMap.InfoWindowOptions {
  /** 覆盖物是否可见 */
  visiable?: boolean;
}
export const InfoWindow = React.forwardRef<InfoWindowProps, InfoWindowProps>(
  (props, ref) => {
    const { children } = props;
    const container = useMemo(() => document.createElement("div"), []);
    useEffect(() => render(<Fragment>{children}</Fragment>, container), [children]);
    const { infoWindow } = useInfoWindow({
      ...props,
      content: children ? container : props.content,
    });
    useImperativeHandle(ref, () => ({ ...props, infoWindow }));
    return null;
  }
);
