/// <reference types="@canmou/react-tmap-types" />
import { Children, cloneElement, forwardRef, Fragment, isValidElement, useEffect, useImperativeHandle, useRef } from "react";
import { useMap } from "./useMap";

export * from './useMap';
export interface MapProps extends TMap.MapEvents, TMap.MapOptions {
    className?: React.HTMLAttributes<HTMLDivElement>['className'];
    style?: React.HTMLAttributes<HTMLDivElement>['style'];
}

type RenderProps =
  | { children: (data: { TMap: typeof TMap; map: TMap.Map; container?: HTMLDivElement | null }) => void }
  | { children: React.ReactNode };

export const Map = forwardRef<MapProps & { map?: TMap.Map } & { TMap: typeof TMap }, MapProps & RenderProps>(({ className, style, children, ...props }, ref) => {
    const elmRef = useRef<HTMLDivElement>(null);
    const { setContainer, container, map } = useMap({ container: elmRef.current, ...props });
    useEffect(() => setContainer(elmRef.current), [elmRef.current]);
    useImperativeHandle(ref, () => ({ ...props, map, TMap, container: elmRef.current }), [map]);
    const childs = Children.toArray(children);
    return (
        <Fragment>
            <div ref={elmRef} className={className} style={{ fontSize: 1, height: '100%', ...style }} />
            {TMap && map && typeof children === 'function' && children({ TMap, map, container})}
            {TMap && map && childs.map((child, key) => {
                if (typeof child === 'string') {
                    return cloneElement(<Fragment>{child}</Fragment>, { key })
                }
                if (!isValidElement(child)) return null;
                if (child.type && typeof child.type === 'string') {
                    return cloneElement(child, { key });
                }
                return cloneElement(child, {
                    ...child.props,
                    TMap,
                    map,
                    container,
                    key
                });
            })}
        </Fragment>
    )
});