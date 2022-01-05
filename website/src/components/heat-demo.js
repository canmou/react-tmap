import { Map, APILoader, Heat } from "@canmou/react-tmap";
import { useEffect, useState } from "react";
import * as d3 from "d3";

export const HeatDemo = () => {
  const [points, setPoints] = useState([]);
  useEffect(() => {
    if (points.length === 0) {
      d3.tsv(
        "https://canmou-bucket.oss-cn-beijing.aliyuncs.com/eleme_shop/aleady/20190411/%E5%B9%BF%E5%B7%9E.tsv"
      ).then((res) => {
        console.log(res);
        let data = [];
        res.forEach((e) => {
          data.push({
            lat: Number(e.lat),
            lng: Number(e.lng),
            count: Number(e.count),
          });
        });
        setPoints(data);
      });
    }
  });
  return (
    <div style={{ textAlign: "left" }}>
      <h2>热力图</h2>
      <div>
        <APILoader
          tkey="UBXBZ-BPTEJ-DEOFY-FAK72-P2Q7T-3GFRQ"
          libraries="service,geometry,visualization"
        >
          <Map
            zoom={9}
            center={{ lat: 23.16, lng: 113.23 }}
            ref={(instance) => {
              if (instance && instance.map) {
                const bounds = instance.map.getBounds();
                console.log("instance", instance);
                console.log("bounds", bounds);
              }
            }}
          >
            {({ TMap, map, container }) => {
              console.log("TMap", TMap);
              console.log("map", map);
              console.log("container", container);
            }}
            <Heat
              visiable={true}
              height={0}
              max={180} // 热力最强阈值
              min={0} // 热力最弱阈值
              radius={30 * 2} // 最大辐射半径
              transitAnimation={{
                duration: 400, //动画时长
              }}
              gradientColor={{
                0.5: '#0000ff',
                0.65: '#75d3f8',
                0.7: '#00ff00',
                0.9: '#ffea00',
                1.0: '#ff0000'
              }}
              enableAggregation={true}
              ref={(instance) => {
                if (instance && instance.visualizationHeat) {
                  console.log("heat", instance);
                  instance.visualizationHeat.setData(points);
                }
              }}
            />
          </Map>
        </APILoader>
      </div>
    </div>
  );
};
