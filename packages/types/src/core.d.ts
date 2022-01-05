/// <reference path="./base.d.ts" />

declare namespace TMap {
  /**
   * 地图对象类
   */
  class Map extends MapEventListener<
    | "mousemove"
    | "zoomchange"
    | "mapmove"
    | "mousewheel"
    | "zoomstart"
    | "mouseover"
    | "mouseout"
    | "dblclick"
    | "click"
    | "zoomend"
    | "moveend"
    | "mouseup"
    | "mousedown"
    | "rightclick"
    | "movestart"
    | "dragstart"
    | "dragging"
    | "dragend"
    | "hotspotout"
    | "hotspotover"
    | "touchstart"
    | "complete"
    | "hotspotclick"
    | "touchmove"
    | "touchend"
    | "resize"
  > {
    constructor(div: string | HTMLElement, opts?: MapOptions);
    /**
     * 设置中心点
     * @param center 中心点
     */
    setCenter();
    /** 获取地图中心点经纬度坐标值。 */
    getCenter(): LatLng;
    /**
     * 获取当前地图视图范围/可视区域。
     * @returns 边界经纬度
     */
    getBounds(): Bounds;
    /**
     * 设置地图显示的缩放级别，参数 zoom 可设范围：[2, 20]
     * @param zoom
     * @param immediately
     * @param duration
     */
    setZoom(
      zoom: number,
      immediately: boolean = false,
      duration?: number
    ): void;
    /**
     * 获取当前地图缩放级别, 默认取值范围为[2, 20]
     * @param digits zoom级别的小数位精度，缺省为2
     */
    getZoom(digits: number): number;
    /** 获取地图当前俯仰角 */
    getPitch(): number;
    /**
     * 设置地图俯仰角
     * @param Pitch 角度
     * @param immediately 是否立即过渡到目标位置
     * @param duration 如果使用动画过度，动画过度的时长控制，单位 ms，默认值是内部自动计算的一个动态值。
     */
    setPitch(
      Pitch: number,
      immediately: boolean = false,
      duration?: number
    ): void;
    /** 返回地图对象的容器 */
    getContainer(): HTMLElement;
    /** 获取地图顺时针旋转角度, 范围: [0 ~ 360] */
    getRotation(): number;
    /**
     * 设置地图顺时针旋转角度, 旋转原点为地图容器中心点, 取值范围: [0 ~ 360]
     * @param rotation 旋转角度
     * @param immediately 是否立即过渡到目标位置
     * @param duration 动画过度的时长控制，单位 ms，默认值是内部自动计算的一个动态值。
     */
    setRotation(
      rotation: number,
      immediately: boolean = false,
      duration?: number
    );
    /**
     * 指定当前地图显示范围，参数 bounds 为指定的范围
     * @param lnglat
     * @param duration 动画过度的时长控制，单位 ms，默认值是内部自动计算的一个动态值。
     */
    panTo(lnglat: [number, number] | LngLat, duration?: number): void;



  }
  interface MapEvents {
    /**
     * 地图缩放级别更改后触发
     */
    onZoomChange?: () => void;
    /**
     * 地图平移时触发事件
     */
    onMapMove?: () => void;
    /**
     * 鼠标在地图上移动时触发
     */
    onMouseMove?: (event: MapsEvent) => void;
    /**
     * 鼠标滚轮开始缩放地图时触发
     */
    onMouseWheel?: (event: MapsEvent) => void;
    /**
     * 鼠标移入地图容器内时触发
     */
    onMouseOver?: (event: MapsEvent) => void;
    /**
     * 鼠标移出地图容器时触发
     */
    onMouseOut?: (event: MapsEvent) => void;
    /**
     * 鼠标在地图上单击抬起时触发
     */
    onMouseUp?: (event: MapsEvent) => void;
    /**
     * 鼠标在地图上单击按下时触发
     */
    onMouseDown?: (event: MapsEvent) => void;
    /**
     * 缩放开始时触发
     */
    onZoomStart?: () => void;
    /**
     * 鼠标左键双击事件
     */
    onDblClick?: (event: MapsEvent) => void;
    /**
     * 鼠标左键单击事件
     */
    onClick?: (event: MapsEvent) => void;
    /**
     * 缩放结束时触发
     */
    onZoomEnd?: () => void;
    /**
     * 地图移动结束后触发，包括平移，以及中心点变化的缩放。如地图有拖拽缓动效果，则在缓动结束后触发
     */
    onMoveEnd?: () => void;
    /**
     * 鼠标右键单击事件
     */
    onRightClick?: (event: MapsEvent) => void;
    /**
     * 地图平移开始时触发
     */
    onMoveStart?: () => void;
    /**
     * 开始拖拽地图时触发
     */
    onDragStart?: () => void;
    /**
     * 拖拽地图过程中触发
     */
    onDragging?: () => void;
    /**
     * 停止拖拽地图时触发。如地图有拖拽缓动效果，则在拽停止，缓动开始前触发
     */
    onDragEnd?: () => void;
    /**
     * 鼠标点击热点时触发
     */
    onHotspotClick?: (event: {
      type: string;
      lnglat: LngLat;
      name: string;
      id: string;
    }) => void;
    /**
     * 鼠标移出热点时触发
     */
    onHotspotOut?: (event: {
      type: string;
      lnglat: LngLat;
      name: string;
      id: string;
    }) => void;
    /**
     * 鼠标滑过热点时触发
     */
    onHotspotOver?: (event: {
      type: string;
      lnglat: LngLat;
      name: string;
      id: string;
    }) => void;
    /**
     * 触摸开始时触发事件，仅适用移动设备
     */
    onTouchStart?: (event: MapsEvent) => void;
    /**
     * 地图资源加载完成后触发事件
     */
    onComplete?: (event: { type: "complete" }) => void;
    /**
     * 拖拽地图过程中触发，仅适用移动设备
     */
    onTouchMove?: (event: MapsEvent) => void;
    /**
     * 触摸结束时触发事件，仅适用移动设备
     */
    onTouchEnd?: (event: MapsEvent) => void;
    /**
     * 地图容器尺寸改变事件
     */
    onResize?: () => void;
  }
  interface MapStates {
    /**
     * 地图是否可通过双击鼠标放大地图, 默认为true。此属性可被setStatus/getStatus 方法控制
     */
    doubleClickZoom?: boolean;
    /** 是否开启地图热点和标注的 hover 效果。PC端默认是true, 移动端默认是 false。 */
    isHotspot?: boolean;
    resizeEnable?: boolean;
    /**
     * 地图是否可通过鼠标滚轮缩放浏览，默认为true。此属性可被setStatus/getStatus 方法控制
     */
    scrollWheel?: boolean;
    /**
     * 可缺省，当touchZoomCenter=1的时候，手机端双指缩放的以地图中心为中心，否则默认以双指中间点为中心。
     */
    touchZoom?: boolean;
    /**
     * (default true)	地图是否可通过鼠标拖拽平移, 默认为 true。此属性可被 setStatus/getStatus 方法控制
     */
    dragEnable?: boolean;
    /**
     * (default true)	地图是否可缩放，默认值为 true。此属性可被 setStatus/getStatus 方法控制
     */
    zoomEnable?: boolean;
    /**
     * (default true)	地图是否使用缓动效果，默认值为true。此属性可被setStatus/getStatus 方法控制
     */
    jogEnable?: boolean;
    /**
     * (default true)	是否允许设置俯仰角度, 3D 视图下为 true, 2D 视图下无效。
     */
    pitchEnable?: boolean;
    /**
     * (default true)	地图是否可旋转, 图默认为true
     */
    rotateEnable?: boolean;
    /**
     * (default true)	地图平移过程中是否使用动画（如调用panBy、panTo、setCenter、setZoomAndCenter等函数, 将对地图产生平移操作, 是否使用动画平移的效果）, 默认为true, 即使用动画
     */
    animateEnable?: boolean;
    /**
     * (default true)	地图是否可通过键盘控制, 默认为true, 方向键控制地图平移，"+"和"-"可以控制地图的缩放, Ctrl+“→”顺时针旋转，Ctrl+“←”逆时针旋转。此属性可被setStatus/getStatus 方法控制
     */
    keyboardEnable?: boolean;
  }
  /**
   * 地图初始化参数
   */
  interface MapOptions extends MapStates {
    /**
     * 初始中心经纬度
     */
    center?: [number, number] | LngLat;
    /**
     * 	地图显示的缩放级别，可以设置为浮点数；若center与level未赋值，地图初始化默认显示用户所在城市范围。
     */
    zoom?: number;
    /**
     * 地图顺时针旋转角度，取值范围 [0-360] ，默认值：0
     */
    rotation?: number;
    /**
     * 俯仰角度，默认 0，最大值根据地图当前 zoom 级别不断增大，2D地图下无效 。
     */
    pitch?: number;
    /**
     * (default '2D')	地图视图模式, 默认为‘2D’，可选’3D’，选择‘3D’会显示 3D 地图效果。
     */
    viewMode?: "2D" | "3D";
    /**
     * (default ['bg','point','road','building'])	设置地图上显示的元素种类, 支持'bg'（地图背景）、'point'（POI点）、'road'（道路）、'building'（建筑物）
     */
    features?: Array<string>;
    /** 地图图层数组，数组可以是图层 中的一个或多个，默认为普通二维地图。 当叠加多个 图层 时，普通二维地图需通过实例化一个TileLayer类实现。 如果你希望创建一个默认底图图层，使用 AMap.createDefaultLayer() */
    layers?: (TileLayer | Satellite | Traffic | RoadNet)[];
    /**
     * (default [2,20])	地图显示的缩放级别范围, 默认为 [2, 20] ，取值范围 [2 ~ 20]
     */
    zooms?: [number, number];
    /**
     * (default true)	是否展示地图文字和 POI 信息。
     */
    showLabel?: boolean;
    /**
     * 地图默认鼠标样式。参数 defaultCursor 应符合 CSS 的 cursor 属性规范。
     */
    defaultCursor?: string;
    /**
     * 设置地图的显示样式，目前支持两种地图样式：
     * - 第一种：自定义地图样式，如 "amap://styles/d6bf8c1d69cea9f5c696185ad4ac4c86" 可前往地图自定义平台定制自己的个性地图样式；
     * - 第二种：官方样式模版,如"amap://styles/grey"。 其他模版样式及自定义地图的使用说明见开发指南
     */
    mapStyle?: string;
    /**
     * 地图楼块的侧面颜色
     */
    wallColor?: string | Array<number>;
    /**
     * 地图楼块的顶面颜色
     */
    roofColor?: string | Array<number>;
    /**
     * (default true) 是否展示地图 3D 楼块，默认 true
     */
    showBuildingBlock?: boolean;
    /**
     * (default false) 是否自动展示室内地图，默认是 false
     */
    showIndoorMap?: boolean;
    /**
     * 天空颜色，3D 模式下带有俯仰角时会显示
     */
    skyColor?: string | Array<number>;
    /**
     * 为 Map 实例指定掩模的路径，各图层将只显示路径范围内图像，3D视图下有效。 格式为一个经纬度的一维、二维或三维数组。
     * 相关示例
     * 一维数组时代表一个普通多边形路径，如:
     * [lng1,lat1] , [lng2,lat2] , [lng3,lat3] ]
     * 二维数组时代表一个带洞的多边形路径，如:
     * [ [lng4,lat4] , [lng5,lat5] , [lng6,lat6] ], [ [lng7,lat7] , [lng8,lat8] , [lng9,lat9] ] ]
     * 三维数组时代表多个多边形路径，如:
     * [ [ [lng1,lat1] , [lng2,lat2] , [lng3,lat3] ],
     * // 一个普通多边形 [
     * //一个带洞多边形 [ [lng4,lat4] , [lng5,lat5] , [lng6,lat6] ], [ [lng7,lat7] , [lng8,lat8] , [lng9,lat9] ] ] ]}
     */
    mask?: Array<number>;
  }
}
