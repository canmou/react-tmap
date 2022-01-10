/// <reference path="./base.d.ts" />
/// <reference path="./core.d.ts" />

declare namespace TMap {
  /**
   * GradientColor 配置参数。
   */
  interface GradientColorOptions {
    stops: object;
    angle: number;
  }

  /**
   *   用于创建渐变色实例。
   */
  interface GradientColor {
    // 渐变色配置参数。
    constructor(opt: GradientColorOptions);
    // 添加一个由偏移(offset)和颜色(color)定义的断点，offset取值范围为0～1，颜色支持rgb(), rgba(),#RRGGBB格式。
    addColorStop(offset: Number, color: String);
    // 设置水平线和渐变线之间的角度，逆时针方向旋转，0度从左到右，90度从下到上。
    setAngle(angle: Number);
    // 获取水平线和渐变线之间的角度。
    getAngle(): number;
    // 静态方法
  }

  /**
   *  动画配置参数
   */
  interface AnimationOptions {
    enable: boolean;
    animationType: string;
    duration: number;
    repeat: number;
    yoyo: boolean;
  }

  /**
   *   热力图配置参数。
   */
  interface HeatOptions {
    // 非配置参数，但是加载入地图需要用map
    // map?: TMxap;

    // 最大辐射半径，默认为50。
    radius: number;
    // 峰值高度，默认为100。
    height: number;
    // 渐变颜色，渐变方向由GradientColor对象的angle属性决定，其中渐变色断点集合需符合GradientColor对象规范
    gradientColor: GradientColor;
    // 热力最弱阈值，小于该值的不显示，默认为0。
    min: number;
    // 热力最强阈值，大于该值的显示为最强色，默认为数据中的最大值。
    max: number;
    // 	全局透明度，取值范围[0，1]，默认为0.8。
    opacity: number;
    // 是否启用自动聚合预处理，适用于万级数据量，启用后可优化运行时性能，但对数据分布略有影响。默认为false。
    enableAggregation: boolean;
    // 热力图是否呈现光照效果，默认为false。
    enableLighting: boolean;
    // 热力图数据源切换过渡动画配置参数，不配置则无过渡动画。支持animationType为‘mix’渐变一种类型，默认animationType为‘mix’渐变。
    transitAnimation: AnimationOptions;
    // 开关动画配置参数，不配置则无开关动画效果。支持animationType为‘fade’淡入淡出一种类型，默认animationType为‘fade’淡入淡出。
    toggleAnimation: AnimationOptions;
    // 图层绘制顺序。
    zIndex: number;
    // 图层最小缩放层级，当地图缩放层级小于该值时该图层不显示，默认为3。
    minZoom: number;
    // 图层最大缩放层级，当地图缩放层级大于该值时该图层不显示，默认为20。
    maxZoom: number;
  }

  /**
   * 热力图单点数据规范。
   */
  interface HeatPoint {
    lat: number;
    lng: number;
    count: number;
  }

  export namespace visualization {
    class Heat {
      constructor(opt: HeatOptions);

      setMin(min: number);

      getMin(): number;

      setMax(max: number);

      getMax(): number;

      setRadis(radius: number);

      getRadius(): number;

      setGradientColor(gradientColor: GradientColor);

      getGradientColor(): GradientColor;

      setHeight(height: number);

      getHeight(): number;

      setOpacity(opacity: number);

      getOpacity(): number;

      setThreshold(min: number, max: number);

      setData(dataList: HeatPoint[]);

      getData(): HeatPoint[];

      setZIndex(zIndex: number);

      getZIndex(): number;

      setMinZoom(minZoom: number);

      getMinZoom(): number;

      setMaxZoom(maxZoom: number);

      getMaxZoom(): number;

      addTo(map: Map);

      updateAnimation(type: String, animationOptions: AnimationOptions);

      getAnimation(type: String): AnimationOptions;

      show();

      hide();

      remove();

      destroy();
      // show()	this	显示图层。
      // hide()	this	隐藏图层。
      // remove()	this	从地图中删除图层。
      // destroy()	this	销毁图层对象。
    }
  }

  interface HeatEvent {
  }
}
