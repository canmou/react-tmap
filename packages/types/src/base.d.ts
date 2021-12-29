declare global {
  interface Window {
    TMap: typeof TMap;
  }
}

declare namespace TMap {
  class LatLng {
    constructor(lng: number, lat: number, noWrap?: boolean);
  }

  class constants {
    static DEFAULT_CONTROL_ID: any;
  }

  interface EventsCommonProps {
    // onMouseOut?(evene)
  }

  class MapEventListener<T = ""> {
    /**
     * 设置控件可见
     */
    show: () => void;
    /**
     * 设置控件隐藏
     */
    hide: () => void;
    /**
     * 添加事件监听函数
     * @param event
     * @param handler
     */
    on(event: T, handler: any): void;
    /**
     * 移除事件监听函数
     * @param event
     * @param handler
     */
    off(event: T, handler: any): void;
    /**
     * 判断当前实例是否已经绑定了某个事件回调
     * @param type 事件类型
     * @param handler 事件回调
     * @param context 事件上下文
     */
    hasEvents(type: string, handler: any, context: any): boolean;
    /**
     * 清除当前实例某一类型的全部事件回调
     * @param type 事件类型，如果此参数为空，清除实例上的所有绑定的事件回调
     */
    clearEvents(type: string): any;
    /** 模拟触发当前实例的某个事件 */
    emit(type: string, data: any): any;
  }
}
