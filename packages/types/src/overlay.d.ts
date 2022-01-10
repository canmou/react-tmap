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

  // 点标记样式
  interface MarkerStyle {
    width: number;
    height: number;
  }

  // 点标记事件
  interface MultiMarkerEvents
    extends Omit<EventsCommonProps, "onRightClick" | "onTouchMove"> {
    /** 海量点加载完成事件 */
    onComplete?: (event: { type: "complete" }) => void;
  }

  // 点标记设置
  interface MultiMarkerOptions {
    id?: string;
    map: Map;
    styles: any;
    geometries: any;
  }

  interface MultiMarkerStyleHash {
    [key: string]: MarkerStyle;
  }

  // 点标记
  class MultiMarker  extends MapEventListener<
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



  // 消息窗体
  class InfoWindow extends MapEventListener {
    constructor(opt: InfoWindowOptions);
    // 打开消息窗体
    open(): void;
    // 关闭消息窗体
    close(): void;
    // 设置经纬度位置。
    setPosition(position: LatLng): void;
    // 设置信息窗显示内容。
    setContent(content: string): void;
    // 获取信息窗口所在的map对象。
    getMap(): void;
    // 销毁信息窗体
    destroy(): void;
  }

  // 消息窗体设置
  interface InfoWindowOptions {
    // （必需）显示信息窗的地图。
    map: Map;

    // 自定义经纬度，用于生成position
    latLng?: {
      lat: number;
      lng: number;
    };

    // （必需）信息窗的经纬度坐标。
    position: LatLng;
    // 信息窗显示内容，默认为空字符串。当enableCustom为true时，需传入信息窗体的dom字符串。
    content?: string | HTMLElement;
    // 信息窗的z-index值，默认为0。
    zIndex?: number;
    // 信息窗相对于position对应像素坐标的偏移量，x方向向右偏移为正值，y方向向下偏移为正值，默认为{x:0, y:0}。
    offset?: object;
    // 信息窗体样式是否为自定义，默认为false。
    enableCustom?: boolean;
  }

  // 消息窗体事件
  interface InfoWindowEvents {
    // 打开后触发事件
    onOpen?(opts: { type: string }): void;
    // 关闭后触发事件
    onClose?(opts: { type: string }): void;
    onChange?(): void;
  }

  //  Marker图层的样式配置
  class MarkerStyleOptions {
    // 必需，标注点图片的宽度，默认为34
    width: number;
    // 必需，标注点图片的高度，默认为50
    height: number;
    // 标注点图片的锚点位置，对象字面量{x:Number, y:Number}形式，在地图各种操作中，锚点的位置与标注位置点是永远对应的；若没有锚点默认为{ x: width/2, y: height }；锚点以图片左上角点为原点
    anchor?: object;
    src?: string;
    faceTo?: string;
    rotate?: number;
    color?: string;
    strokeColor?: string;
    strokeWidth?: number;
    size?: number;
    direction?: string;
    offset?: {
      x: number,
      y: number,
    }
  }
}
