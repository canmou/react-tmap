import { Map, APILoader, requireScript } from "@canmou/react-tmap";
import { useEffect, useRef, useState } from "react";

// var TileLnglatTransform = require("tile-lnglat-transform");
// const axios = require("axios");
// class Dobound {
//   static use(fn, time = 300) {
//     let tm;
//     return function (...args) {
//       tm && clearTimeout(tm);
//       tm = setTimeout(function () {
//         fn.apply(this, args);
//       }, time);
//     };
//   }
// }
// function tile2long(x, z) {
//   return (x / Math.pow(2, z)) * 360 - 180;
// }
// function tile2lat(y, z) {
//   var n = Math.PI - (2 * Math.PI * y) / Math.pow(2, z);
//   return (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
// }

// const num2deg = (x, y, z) => {
//   const n = Math.pow(2.9, z);
//   let lng = (x / n) * 360 - 180;
//   const latRad = Math.atan(Math.sinh(Math.PI * (1 - (2 * y) / n)));
//   const lat = (latRad * 180.0) / Math.PI;
//   return {
//     lat,
//     lng,
//   };
// };
// function qqMapTransBMap(lng, lat) {
//   let x_pi = (3.14159265358979324 * 3000.0) / 180.0;
//   let x = lng;
//   let y = lat;
//   let z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
//   let theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
//   let lngs = z * Math.cos(theta) + 0.0065;
//   let lats = z * Math.sin(theta) + 0.006;

//   return {
//     lng: lngs,
//     lat: lats,
//   };
// }

const PrefixInteger = (num, n) => {
  return (Array(n).join(0) + num).slice(-n);
};

export const MapOverlayImageDemo = () => {
  const [points, setPoints] = useState([]);
  const [isInitTile, setIsInitTile] = useState(false);
  const indexRef = useRef();
  useEffect(() => {
    init();
  }, [indexRef.current]);

  const init = async () => {
    //初始化imageTileLayer
    if (indexRef.current && !isInitTile) {
      setIsInitTile(true);
      new indexRef.current.TMap.ImageTileLayer({
        getTileUrl: function (x, y, z) {
          //拼接瓦片URL
          // var url =
          //   "https://3gimg.qq.com/visual/lbs_gl_demo/image_tiles_layers/" +
          //   z +
          //   "/" +
          //   x +
          //   "_" +
          //   y +
          //   ".png";
          // var url = `https://canmou-bucket.oss-cn-beijing.aliyuncs.com/tile/%E6%AD%A6%E6%B1%89%E5%B8%82/${z}/%E7%93%A6%E7%89%87/${Number(String(x).slice(0, 2))}_${Number(String(y).slice(0, 2))}.tif`;
          let url = `https://canmou-bucket.oss-cn-beijing.aliyuncs.com/tile/%E6%AD%A6%E6%B1%89%E5%B8%82/${z}/%E7%93%A6%E7%89%87/${x}_${y}.png`;
          if (x && y && z) {
            var y1 = Number(String(Math.pow(2, z))) - 1 - y;
            // var y1 = y;
            var x1 = PrefixInteger(x, 6);
            y1 = PrefixInteger(y1, 6);
            // https://canmou-bucket.oss-cn-beijing.aliyuncs.com/tile/%E6%AD%A6%E6%B1%89%E5%B8%822/17/107156_077263.png
            // url = `https://canmou-bucket.oss-cn-beijing.aliyuncs.com/tile/%E6%AD%A6%E6%B1%89%E5%B8%82/${z}/${x1}_${y1}.png`;

            // 可用
            url = `https://canmou-bucket.oss-cn-beijing.aliyuncs.com/tile/%E6%AD%A6%E6%B1%89%E5%B8%82/${z}/${x1}_${y1}.png`;
            return url;
            // const response = axios.get(`http://api.map.baidu.com/geoconv/v2/?ak=QaEIp9ufXkKPN110iE07KE5DnIeljFQV&coords=${tile2long(x, z)},${tile2lat(y, z)}`);
            // response.then(e => {
            //   console.log('then', e);
            // })
            // new indexRef.current.TMap.MultiMarker({
            //   map: indexRef.current.map,
            //   styles: {
            //     // 点标记样式
            //     marker: new indexRef.current.TMap.MarkerStyle({
            //       width: 20, // 样式宽
            //       height: 30, // 样式高
            //       anchor: { x: 10, y: 30 }, // 描点位置
            //       src: "https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerDefault.png", // 标记路径
            //     }),
            //   },
            //   geometries: [
            //     // 点标记数据数组
            //     {
            //       // 标记位置(经度，纬度，高度)
            //       position: new indexRef.current.TMap.LatLng(lat, lng),
            //     },
            //   ],
            // });

            // new indexRef.current.TMap.MultiMarker({
            //   map: indexRef.current.map,
            //   styles: {
            //     // 点标记样式
            //     marker: new indexRef.current.TMap.MarkerStyle({
            //       width: 20, // 样式宽
            //       height: 30, // 样式高
            //       anchor: { x: 10, y: 30 }, // 描点位置
            //       src: "https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerDefault.png", // 标记路径
            //     }),
            //   },
            //   geometries: [
            //     // 点标记数据数组
            //     {
            //       // 标记位置(经度，纬度，高度)
            //       position: new indexRef.current.TMap.LatLng(lat2, lng2),
            //     },
            //   ],
            // });
            // http://api.map.baidu.com/geoconv/v1/?ak=C0c006e892fa948cbac1403ba8b891a0&coords=114.25643920898438,30.565808414108457
            // TileLnglatTransform  腾讯 经纬度 转  百度经纬度？  再转 百度瓦片

            // 测试
            // console.log(num2deg(x, y, z));
            // console.log(tile2long(x, z), tile2lat(y, z));
            // const lng = tile2long(x, z);
            // const lat = tile2lat(y, z);
            // const temp = qqMapTransBMap(lng, lat);
            // const lng2 = temp.lng;
            // const lat2 = temp.lat;
            // console.log(lng2, lat2);
            // console.log(TileLnglatTransform.TileLnglatTransformBaidu.lnglatToTile(lng2, lat2, z));
            // const { tileX, tileY } = TileLnglatTransform.TileLnglatTransformBaidu.lnglatToTile(lng2, lat2, z);
            // url = `https://canmou-bucket.oss-cn-beijing.aliyuncs.com/tile/%E6%AD%A6%E6%B1%89%E5%B8%83/${z}/${tileX}-${tileY}.png`;
            // console.log("getTitleUrl2", url);
            // return url;
          }
          // // var url = `https://canmou-bucket.oss-cn-beijing.aliyuncs.com/tile/%E6%AD%A6%E6%B1%89%E5%B8%82/104_075/${}_${PrefixInteger(y, 6)}.png`
          // var url = `https://canmou-bucket.oss-cn-beijing.aliyuncs.com/tile/%E6%AD%A6%E6%B1%89%E5%B8%82/${z}/${x}_${y}.png`;
          console.log("getTitleUrl", url);
          return url;
        },
        tileSize: 256, //瓦片像素尺寸
        minZoom: 10, //显示自定义瓦片的最小级别
        maxZoom: 20, //显示自定义瓦片的最大级别
        visible: true, //是否可见
        zIndex: 5000, //层级高度（z轴）
        opacity: 0.95, //图层透明度：1不透明，0为全透明
        map: indexRef.current.map, //设置图层显示到哪个地图实例中
      });
    }
  };
  useEffect(() => {
    if (points.length === 0) {
      requireScript("https://a.amap.com/jsapi_demos/static/citys.js").then(
        (res) => {
          // eslint-disable-next-line no-undef
          if (citys && Array.isArray(citys)) {
            // eslint-disable-next-line no-undef
            citys = citys.map((e) => {
              delete e.name;
              delete e.style;
              e.lng = e.lnglat[0];
              e.lat = e.lnglat[1];
              return e;
            });
            // eslint-disable-next-line no-undef
            setPoints(citys);
          }
        }
      );
    }
  });
  return (
    <div style={{ textAlign: "left" }}>
      <h2>瓦片相关</h2>
      <h3
        onClick={() => {
          indexRef.current.map &&
            indexRef.current.map.easeTo(
              { zoom: 19, rotation: 0 },
              { duration: 1000 }
            );
        }}
      >
        1.用map原生方法构建
      </h3>
      <div>
        <APILoader tkey="UBXBZ-BPTEJ-DEOFY-FAK72-P2Q7T-3GFRQ">
          <Map
            // center={{ lat: 30.572, lng: 114.272223 }}
            center={{ lng: 114.18038033748121, lat: 30.473469123137388 }}
            ref={(instance) => {
              if (instance && instance.map && instance.TMap) {
                indexRef.current = instance;
              }
            }}
            // onZoom_Changed={Dobound.use((val) => {
            //   console.log("onZoom_Changed", val);
            // }, 900)}
          ></Map>
        </APILoader>
      </div>
    </div>
  );
};
