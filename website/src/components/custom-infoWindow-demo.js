import { Map, APILoader, InfoWindow } from "@canmou/react-tmap";
import { useEffect, useRef, useState } from "react";
import "./custom-infoWindow-demo.css";

export const CustomInfoWindowDemo = () => {
  const indexRef = useRef();
  const firstInfoWindowRefAll = useRef([]);
  const secondInfoWindowRefAll = useRef([]);
  const endInfoWindowRefAll = useRef([]);
  const [tab, setTab] = useState(1);

  const info = [];
  info.push(
    '<div style="background: #fff;padding: 30px">我是自定义信息窗体,信息窗体切换最终只保留一种</div>'
  );

  // 还原消息窗体的异步问题，出现不应该同时出现的窗体
  const changeInfoWindowTwo = () => {
    const TMap = indexRef.current.TMap;
    const map = indexRef.current.map;
    if (tab === 1) {
      setTimeout(() => {
        const tempInfoWindow = new TMap.InfoWindow({
          map: map,
          position: new TMap.LatLng(23.36, 113.83),
          enableCustom: true,
          zIndex: 99, //信息窗的z-index值
          offset: { y: -90, x: 0 },
          content: `<div class="info_card">
                  <div class="title"><div class="left">No.1</div>
                  <div class="right"><div class="title_name">测试窗体</div>
                  <div>销量： 0</div>
                  </div></div>
                  <span class="top-border"><span class="cancle top"></span></span>
                  </div>`,
        });
        if (secondInfoWindowRefAll.current) {
          secondInfoWindowRefAll.current.forEach((e) => {
            e.info.setMap(null);
          });
        }
        firstInfoWindowRefAll.current.push({
          info: tempInfoWindow,
        });
      }, 500);
      setTab(2);
    } else {
      if (firstInfoWindowRefAll.current) {
        setTimeout(() => {
          const temp2InfoWindow = new TMap.InfoWindow({
            map: map,
            position: new TMap.LatLng(23.16, 113.03),
            enableCustom: true,
            zIndex: 99, //信息窗的z-index值
            offset: { y: -90, x: 0 },
            content: `<div class="info_card">
                    <div class="title"><div class="left">No.2</div>
                    <div class="right"><div class="title_name">测试窗体2</div>
                    <div>销量： 0</div>
                    </div></div>
                    <span class="top-border"><span class="cancle top"></span></span>
                    </div>`,
          });
          firstInfoWindowRefAll.current.forEach((e) => {
            e.info.setMap(null);
          });
          secondInfoWindowRefAll.current.push({
            info: temp2InfoWindow,
          });
        }, 800);
      }
      setTab(1);
    }
  };
  const changeInfoWindow = () => {
    const TMap = indexRef.current.TMap;
    const map = indexRef.current.map;
    if (tab === 1) {
      setTimeout(() => {
        const tempInfoWindow = new TMap.InfoWindow({
          map: map,
          position: new TMap.LatLng(23.36, 113.83),
          enableCustom: true,
          zIndex: 99, //信息窗的z-index值
          offset: { y: -90, x: 0 },
          content: `<div class="info_card">
                <div class="title"><div class="left">No.1</div>
                <div class="right"><div class="title_name">测试窗体</div>
                <div>销量： 0</div>
                </div></div>
                <span class="top-border"><span class="cancle top"></span></span>
                </div>`,
        });
        if (endInfoWindowRefAll.current) {
          endInfoWindowRefAll.current.forEach((e) => {
            e.info.setMap(null);
          });
        }
        endInfoWindowRefAll.current.push({
          info: tempInfoWindow,
        });
      }, 500);

      setTab(2);
    } else {
      if (endInfoWindowRefAll.current) {
        setTimeout(() => {
          const temp2InfoWindow = new TMap.InfoWindow({
            map: map,
            position: new TMap.LatLng(23.16, 113.03),
            enableCustom: true,
            zIndex: 99, //信息窗的z-index值
            offset: { y: -90, x: 0 },
            content: `<div class="info_card">
                  <div class="title"><div class="left">No.2</div>
                  <div class="right"><div class="title_name">测试窗体2</div>
                  <div>销量： 0</div>
                  </div></div>
                  <span class="top-border"><span class="cancle top"></span></span>
                  </div>`,
          });
          endInfoWindowRefAll.current.forEach((e) => {
            e.info.setMap(null);
          });
          endInfoWindowRefAll.current.push({
            info: temp2InfoWindow,
          });
        }, 800);
      }
      setTab(1);
    }
  };

  useEffect(() => {
    if (indexRef.current) {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexRef.current]);
  return (
    <div style={{ textAlign: "left" }}>
      <h2>信息窗体</h2>
      <div>
        <APILoader tkey="UBXBZ-BPTEJ-DEOFY-FAK72-P2Q7T-3GFRQ">
          <button
            onClick={() => {
              changeInfoWindowTwo();
            }}
          >
            切换窗体
          </button>
          <Map
            zoom={9}
            center={{ lat: 23.16, lng: 113.23 }}
            ref={(instance) => {
              if (instance && instance.map && instance.TMap) {
                indexRef.current = instance;
              }
            }}
          ></Map>
        </APILoader>
      </div>
    </div>
  );
};
