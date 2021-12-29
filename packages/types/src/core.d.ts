/// <reference path="./base.d.ts" />

declare namespace TMap {
    /**
     * 地图对象类 
     */
    class Map extends MapEventListener<'mousemove' | 'zoomchange' | 'mapmove' | 'mousewheel' | 'zoomstart' | 'mouseover' | 'mouseout' | 'dblclick' | 'click' | 'zoomend' | 'moveend' | 'mouseup' | 'mousedown' | 'rightclick' | 'movestart' | 'dragstart' | 'dragging' | 'dragend' | 'hotspotout' | 'hotspotover' | 'touchstart' | 'complete' | 'hotspotclick' | 'touchmove' | 'touchend' | 'resize'> {
        constructor (div: string | HTMLElement, opts?: MapOptions);
        /**
         * 设置中心点
         * @param center 中心点
         */
        setCenter();
    }
}