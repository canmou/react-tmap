/// <reference path="./base.d.ts" />
/// <reference path="./core.d.ts" />

declare namespace TMap {
  interface PointGeometry {
    id: string;
    styleId: string;
    position: LatLng;
    rank: number;
    properties: object;
    content: string;
  }

  interface MarkerStyle {
    width: number;
    height: number;
  }

  interface MultiMarkerEvents extends Omit<EventsCommonProps, 'onRightClick' | 'onTouchMove'> {
    /** 海量点加载完成事件 */
    onComplete?: (event: { type: 'complete'}) => void;
  }
  
  interface MultiMarkerOptions {
    id?: string;
    map: Map;
    styles: any;
    geometries: any;
  }

  interface MultiMarkerStyleHash {
    [key: string]: MarkerStyle;
  }

  class MultiMarker extends MapEventListener<
    | "touchstart"
    | "touchend"
    | "mousemove"
    | "dbclick"
    | "click"
    | "complete"
    | "mouseover"
    | "mousedown"
    | "mouseup"
    | "mouseout"
  > {
    constructor(opts: MultiMarkerOptions);
    setMap(map: Map | null): any;
    setGeometries(geometries: Array<PointGeometry>): void;
    setStyles(styles: MultiMarkerStyleHash): void;
    setVisible(visible: boolean): void;
    getMap(): Map;
    getId(): void;
    getGeometries(): Array<PointGeometry>;
    getStyles(): void;
    getVisible(): void;
    getGeometryById(id: string): PointGeometry;
    updateGeometries(geometry: Array<PointGeometry>): void;
    add(geometry: Array<PointGeometry>): void;
    remove(ids: string[]): void;
    // moveAlong();
    // stopMove();
    // pauseMove();
    // resumeMove();
    // on(eventName:String, listener:Function);
    // off(eventName:String, listener:Function);
  }
}
