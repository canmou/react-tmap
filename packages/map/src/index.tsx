import { forwardRef, Fragment, useEffect, useRef } from "react";
import { useMap } from "./useMap";

// 简化react-amap，react for 腾讯地图
export interface MapProps {
    className?: React.HTMLAttributes<HTMLDivElement>['className'];
    style?: React.HTMLAttributes<HTMLDivElement>['style'];
}

export const Map = forwardRef<MapProps, MapProps>(({ className, style, children, ...props }, ref) => {
    const elmRef = useRef<HTMLDivElement>(null);
    const { setContainer } = useMap({ container: elmRef.current, ...props });
    useEffect(() => setContainer(elmRef.current), [elmRef.current]);
    return (
        <Fragment>
            <div ref={elmRef} className={className} style={{ fontSize: 1, height: '100%', ...style }} />
        </Fragment>
    )
});