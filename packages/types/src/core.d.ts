/// <reference path="./base.d.ts" />

declare namespace TMap {
    /**
     * 地图对象类 
     */
    class Map {
        constructor (div: string | HTMLElement, opts?: MapOptions);
        /**
         * 设置中心点
         * @param center 中心点
         */
        setCenter();
    }
}