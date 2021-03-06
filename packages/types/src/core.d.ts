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
    | "center_changed"
  > {
    constructor(div: string | HTMLElement, opts?: MapOptions);

    /**
     * 设置中心点
     * @param center 中心点
     */
    setCenter(center: LatLng): void;

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

    /**
     * 设置地图显示比例
     * @param scale 比例值
     */
    setScale(scale: number): void;

    /**
     * 设置地图与容器偏移量，Object的格式为{x:Number, y:Number}，x方向向右偏移为正值，y方向向下偏移为正值。
     * @param offect 偏移量
     */
    setOffset(offset: { x: number; y: number }): void;

    /**
     * 设置地图是否支持拖拽。
     * @param draggable 是否支持
     */
    setDraggabl(draggable: boolean): void;

    /**
     * 设置地图是否支持滚轮缩放。
     * @param scrollable
     */
    setScrollable(scrollable: boolean): void;

    /**
     * 设置地图最大缩放级别，支持3～20。
     * @param maxZoom
     */
    setMaxZoom(maxZoom: number): void;

    /**
     * 设置地图最小缩放级别，支持3～20。
     * @param minZoom
     */
    setMinxZoom(minZoom: number): void;

    /**
     * 设置地图是否支持改变俯仰角度。在2D视图下，此方法无效。
     * @param pitchable
     */
    setPitchable(pitchable: boolean): void;

    /**
     * 设置地图是否支持改变旋转角度。在2D视图下，此方法无效
     * @param rotatable
     */
    setRotatable(rotatable: boolean): void;

    /**
     * 设置地图是否支持双击缩放。
     * @param doubleClickZoom
     */
    setDoubleClickZoom(doubleClickZoom: boolean): void;

    /**
     * 设置地图限制边界，拖拽、缩放等操作无法将地图移动至边界外。
     * @param boundary
     */
    setBoundary(boundary: TMap.AnimationOptions): void;

    /**
     * 设置地图视图模式。
     * @param viewMode
     */
    setViewMode(viewMode: string): void;

    /**
     * 动态设置地图底图，BaseMap目前支持矢量底图（VectorBaseMap）、卫星底图（SatelliteBaseMap）、路况底图（TrafficBaseMap），可以使用数组形式实现多种底图叠加。
     * @param baseMap
     */
    setBaseMap(baseMap: BaseMap | BaseMap[]): void;

    /**
     * 	动态设置个性化地图样式。
     * @param mapStyleId
     */
    setMapStyleld(mapStyleId: string): void;

    /**
     * 指定当前地图显示范围，参数 bounds 为指定的范围
     * @param lnglat
     * @param duration 动画过度的时长控制，单位 ms，默认值是内部自动计算的一个动态值。
     */
    panTo(lnglat: [number, number] | LngLat, duration?: number): void;

    /**
     * 平滑缩放到指定级别。
     * @param zoom
     * @param opts
     */
    zoomTo(zoom: number, opts: EaseOptions): void;

    /**
     * 平滑旋转到指定角度。
     * @param rotation
     * @param opts
     */
    rotateTo(rotation: number, opts: EaseOptions): void;

    /**
     * 平滑变化到指定俯仰角度。
     * @param pitch
     * @param opts
     */
    pitchTo(pitch: Number, opts: EaseOptions): void;

    /**
     * 平滑过渡到指定状态，mapStatus为key-value格式，可以设定center、zoom、rotation、pitch。
     * @param mapStatus
     * @param opts
     */
    easeTo(mapStatus: Object, opts: EaseOptions): void;

    /**
     * 根据指定的地理范围调整地图视野。
     * @param bounds
     * @param options
     */
    fitBounds(bounds: LatLngBounds, options: FitBoundsOptions): void;

    /**
     * 获取地图中心点经纬度坐标值。
     */
    getCenter(): LatLng;

    /**
     * 获取地图缩放级别。
     */
    getZoom(): void;

    /**
     * 获取地图顺时针旋转角度
     * */
    getRotation(): number;

    /**
     *  获取地图当前俯仰角
     * */
    getPitch(): number;

    /**
     * 获取当前地图视图范围/可视区域。
     * @returns 边界经纬度
     */
    getBounds(): LatLngBounds;

    /**
     * 获取地图显示比例。
     */
    getScale(): number;

    /**
     * 获取地图与容器的偏移量Object的格式为 {x:Number, y:Number}，x方向向右偏移为正值，y方向向下偏移为正值。
     */
    getOffset(): { x: number; y: number };

    /**
     * 获取地图是否支持拖拽。
     */
    getDraggable(): boolean;

    /**
     * 	获取地图是否支持滚轮缩放。
     */
    getScrollable(): boolean;

    /**
     * 获取地图是否支持双击缩放。
     */
    getDoubleClickZoom(): boolean;

    /**
     * 获取地图限制边界。
     */
    getBoundary(): LatLngBounds;

    /**
     * 添加控件到地图,传入控件对象。
     * @param control
     */
    addControl(control: Control): string;

    /**
     * 从地图容器移出控件,默认控件的id列表参考 DEFAULT_CONTROL_ID
     * @param id
     */
    removeControl(id: string): string;

    /**
     * 根据控件id获取对应的控件对象,默认控件的id列表参考 DEFAULT_CONTROL_ID。
     * @param id
     */
    getControl(id: string): Control;

    /**
     * 	获取地图视图模式。
     */
    getViewMode(): string;

    /**
     * 获取当前的底图类型。
     */
    getBaseMap(): BaseMap | BaseMap[];

    /**
     * 获取室内地图管理器。
     */
    getIndoorManager(): IndoorManager;

    /**
     * 销毁地图。
     */
    destroy(): void;

    /**
     * 经纬度坐标转换为容器像素坐标，容器像素坐标系以地图容器左上角点为原点。
     * @param latLng
     */
    projectToContainer(latLng: LatLng);

    /**
     * 经纬度坐标转换为容器像素坐标，容器像素坐标系以地图容器左上角点为原点。
     * @param pixel
     */
    unprojectFromContainer(pixel: Point);

    /**
     * 修改图层层级顺序，根据输入 LAYER_LEVEL 常量调整 layerId 对应图层的渲染层级 ，其中layerId可以通过图层getId方法获取。注： 设置ZIndex 可调整同一大类层级下的不同图层顺序，此方法则是调整目标图层的大类层级。
     * @param layerId
     * @param level
     */
    moveLayer(layerId: String, level: LAYER_LEVEL);

    /**
     * 开始动画，通过keyFrames定义关键帧
     * @param keyFrames
     * @param opts
     */
    startAnimation(keyFrames: MapKeyFrame[], opts: AnimationOptions);

    /**
     * 停止动画，停止后无法通过resumeAnimation恢复
     */
    stopAnimation();

    /**
     * 暂停动画
     */
    pauseAnimation();

    /**
     * 恢复动画
     */
    resumeAnimation();

    /**
     * 启用地图区域高亮功能
     * @param opts
     */
    enableAreaHighlight(opts: highlightOptions);

    /**
     * 禁用地图区域高亮功能
     */
    disableAreaHighlight();

    /**
     * 启用地图区域掩膜功能
     * @param opts
     */
    enableAreaClip(opts: ClipOptions);

    /**
     * 停用地图区域掩膜功能
     */
    disableAreaClip();
  }

  /**
   * 地图事件
   */
  interface MapEvents {
    /**
     * 地图进入空闲状态时触发。
     */
    onIdle?: () => void;

    /**
     * 当地图容器中可见的瓦片加载完后会触发此事件。
     */
    onTilesloaded?: () => void;

    /**
     * 鼠标左键单击事件
     */
    onClick?: (event: MapEvent) => void;

    /**
     * 鼠标右键单击事件
     */
    onRightClick?: (event: MapEvent) => void;

    /**
     * 鼠标左键双击事件
     */
    onDblClick?: (event: MapEvent) => void;

    /**
     * 鼠标在地图上单击按下时触发
     */
    onMouseDown?: (event: MapEvent) => void;

    /**
     * 鼠标在地图上单击抬起时触发
     */
    onMouseUp?: (event: MapEvent) => void;

    /**
     * 鼠标在地图上移动时触发
     */
    onMouseMove?: (event: MapEvent) => void;

    /**
     * 触摸开始时触发事件，仅适用移动设备
     */
    onTouchStart?: (event: MapEvent) => void;

    /**
     * 拖拽地图过程中触发，仅适用移动设备
     */
    onTouchMove?: (event: MapEvent) => void;
    /**
     * 触摸结束时触发事件，仅适用移动设备
     */
    onTouchEnd?: (event: MapEvent) => void;

    /**
     * 开始拖拽地图时触发
     */
    onDragStart?: (event: MapsEvent) => void;

    /**
     * 地图开始发生拖拽交互时触发。
     */
    onDrag?: (event: MapsEvent) => void;

    /**
     * 停止拖拽地图时触发。如地图有拖拽缓动效果，则在拽停止，缓动开始前触发
     */
    onDragEnd?: (event: MapEvent) => void;

    /**
     * 地图开始平移时触发。
     */
    onPanStart?: (event: MapsEvent) => void;

    /**
     * 地图移动时触发。
     */
    onPan?: (event: MapsEvent) => void;

    /**
     * 地图移动时触发。
     */
    onPanEnd?: (event: MapsEvent) => void;

    /**
     * 地图开始旋转时触发。
     */
    onRotateStart?: (event: MapsEvent) => void;

    /**
     * 地图旋转时触发。
     */
    onRotate?: (event: MapsEvent) => void;

    /**
     * 地图旋转结束时触发。
     */
    onRotateEnd?: (event: MapsEvent) => void;

    /**
     * 地图开始发生俯仰角变化时触发。
     */
    onPitchStart?: (event: MapsEvent) => void;

    /**
     * 	地图俯仰角变化时触发。
     */
    onPitch?: (event: MapsEvent) => void;

    /**
     * 	地图俯仰角变化结束时触发。
     */
    onPitchEnd?: (event: MapsEvent) => void;

    /**
     *地图缩放时触发。
     */
    onZoom?: (event: MapEvent) => void;

    /**
     * 地图容器尺寸改变事件
     */
    onResize?: (event: MapEvent) => void;

    /**
     * 中心点改变
     */
    onCenter_Changed?: (event: MapEvent) => void;

    /**
     * 可视化区域改变
     */
    onBounds_Changed?: (event: MapEvent) => void;

    /**
     * 	地图显示比例变化时触发此事件。
     */
    onScale_Changed?: (event: MapEvent) => void;

    /**
     * 	给map添加控件的时候触发此事件。
     */
    onControl_Added?: (event: MapEvent) => void;

    /**
     * 从map移出控件的时候触发此事件。
     */
    onControl_removed?: (event: MapEvent) => void;

    /**
     * 动画进行中
     */
    onAnimation_Playing?: (event: AnimationEvent) => void;

    /**
     * 	动画进入下一循环，返回循环序号
     */
    onAnimation_Looped?: (n: number) => void;

    /**
     * 	动画结束
     */
    onAnimation_Ended?: (n: number) => void;

    /**
     * 	动画停止
     */
    onAnimation_Stopped?: () => void;

    /**
     * 缩放改变??????????????????
     */
    onZoom_Changed?: (event: MapEvent) => void;

    /**
     * 地图移动结束后触发，包括平移，以及中心点变化的缩放。如地图有拖拽缓动效果，则在缓动结束后触发
     */
    onMoveEnd?: (event: MapEvent) => void;

    /**
     * 鼠标移入地图容器内时触发
     */
    onMouseOver?: (event: MapEvent) => void;
    /**
     * 鼠标移出地图容器时触发
     */
    onMouseOut?: (event: MapEvent) => void;
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
     * 地图中心点经纬度。
     */
    center?: LatLng;
    /**
     * 地图缩放级别，支持3～20。
     */
    zoom?: number;
    /**
     * 地图最小缩放级别，默认为3。
     */
    minZoom?: number;
    /**
     * 地图最大缩放级别，默认为20。
     */
    maxZoom?: number;
    /**
     * 地图在水平面上的旋转角度，顺时针方向为正，默认为0。
     */
    rotation?: number;
    /**
     * 地图俯仰角度，取值范围为0~80，默认为0。
     */
    pitch?: number;
    /**
     * 地图显示比例，默认为1。
     */
    scale?: number;
    /**
     * 地图中心与容器的偏移量，Object的格式为 {x:Number, y:Number}（右方下方为正，单位为像素）。
     */
    offset?: object;
    /**
     * 	是否支持拖拽移动地图，默认为true。
     */
    draggable?: boolean;
    /**
     * 是否支持鼠标滚轮缩放地图，默认为true。
     */
    scrollable?: boolean;
    /**
     * 	是否允许设置旋转角度；默认为true。在2D视图下，此属性无效。
     */
    rotatable?: boolean;
    /**
     * 是否支持双击缩放地图，默认为true。
     */
    doubleClickZoom?: boolean;
    /**
     * 地图缩放焦点控制。
     */
    mapZoomType?: MAP_ZOOM_TYPE;
    /**
     * 地图边界，设置后拖拽、缩放等操作无法将地图移动至边界外，默认为null。
     */
    boundary?: LatLngBounds;
    /**
     * 图样式ID，有效值为”style[编号]”，与key绑定，详见 个性化地图配置页面。
     */
    mapStyleId?: string;
    /**
     * 图样式ID，有效值为”style[编号]”，与key绑定，详见 个性化地图配置页面。
     */
    baseMap?: BaseMap | BaseMap[];
    /**
     * 地图视图模式，支持2D和3D，默认为3D。2D模式下不可对地图进行拖拽旋转，pitch和rotation始终保持为0。
     */
    viewMode?: '2D' | '3D';
    /**
     * 是否显示地图上的控件
     */
    showControl?: boolean;
  }

  /**
   *
   */
  interface EaseOptions {
    duration: number;
  }

  /**
   * 地图自适应地理范围配置参数，可控制边距以及限制缩放等级。
   */
  interface FitBoundsOptions {
    /**
     * 设定的地理范围与可视窗口之间的距离，可以通过{top:Number, bottom:Number, left:Number, right:Number}的格式明确各方向的边距，或仅传入一个数字统一各方向的边距，不可为负数。
     */
    padding: number | object;

    /**
     * 调整视野时的最小缩放等级，默认值且最小值为地图的最小缩放等级。
     */
    minZoom: number;

    /**
     * 调整视野时的最大缩放等级，默认值且最大值为地图的最大缩放等级。
     */
    maxZoom: number;

    /**
     * 缓动配置，可设置地图视野变化过程的动画效果。
     */
    ease: EaseOptions;
  }

  /**
   * 地图掩膜区域设置。
   */
  interface ClipOptions {
    paths: LatLng;
  }

  /**
   * 地图高亮区域设置。
   */
  interface highlightOptions {
    /**
     * 高亮区域轮廓坐标点串
     */
    paths: LatLng;

    /**
     * 高亮色，区域内地图元素将与该色进行混合，支持rgb()，rgba()，#RRGGBB等形式，默认为rgba(0, 0, 0, 0)
     */
    highlightColor: string;

    /**
     * 阴影色，区域外地图元素将与该色进行混合，支持rgb()，rgba()，#RRGGBB等形式，默认为rgba(0, 0, 0, 0.4)
     */
    shadeColor: string;
  }

  /**
   * 地图动画关键帧对象。
   */
  interface MapKeyFrame {
    /**
     * 动画过程中该关键帧的百分比，取值范围为0~1
     */
    percentage: number;

    /**
     * 地图中心点经纬度
     */
    center: LatLng;

    /**
     * 地图缩放级别
     */
    zoom: number;

    /**
     * 地图在水平面上的旋转角度
     */
    rotation: number;

    /**
     * 地图俯仰角度，取值范围为0~80
     */
    pitch: number;
  }

  /**
   * 动画参数。
   */
  interface AnimationOptions {
    /**
     * 动画周期时长，单位为ms，默认为1000
     */
    duration: number;
    /**
     * 动画周期循环次数，若为Infinity则无限循环，默认为1
     */
    loop: number;
  }

  /**
   *   图层渲染层级常量。
   */
  interface LAYER_LEVEL {
    UNDERGROUND;
    BASE;
    GROUND;
    BUILDING;
    OVERLAY_AA;
    TEXT;
    OVERLAY_NAA;
  }

  /**
   * 地图缩放焦点常量。
   */
  interface MAP_ZOOM_TYPE {
    DEFAULT;
    CENTER;
  }

  /**
   * 地图事件返回参数规范。
   */
  interface MapEvent {
    /**
     * 事件发生时的经纬度坐标。
     */
    latLng: LatLng;
    /**
     * 事件发生时的屏幕位置，返回{x:Number, y:Number}格式
     */
    point: { x: number; y: number };
    /**
     * 事件类型。
     */
    type: string;
    /**
     * 事件的目标对象。
     */
    target: object;
    /**
     * 事件触发位置的poi信息，当触发位置没有poi点时值为null（仅支持click事件）
     */
    poi: POIInfo | null;
    /**
     * 浏览器原生的事件对象。
     */
    originalEvent: MouseEvent | TouchEvent;
  }

  /**
   *  地图事件返回参数中的poi信息。
   */
  interface POIInfo {
    /**
     * poi的经纬度位置。
     */
    latLng: LatLng;
    /**
     * 	Poi名称。
     */
    name: string;
  }

  /**
   * BaseMap
   */
  interface BaseMap {
    /**
     * 类型
     */
    type: "vector" | "satellite" | "traffic";
    /**
     * 要素
     */
    features: string[];
    /**
     * 路况线网图的透明度，默认为1。
     */
    opacity?: number;
    /**
     * 路况流动粒子颜色组合，长度为4的数组，0-3位分别对应流畅、缓行、拥堵、极度拥堵，颜色支持rgb()，rgba()，#RRGGBB等形式。
     */
    flowColor?: string[];
    /**
     * 路况流动粒子速度组合，长度为4的数组，0-3位分别对应流畅、缓行、拥堵、极度拥堵，单位为pixel/s，默认为[80, 30, 10, 5] 。
     */
    flowSpeed?: number[];
  }
}
