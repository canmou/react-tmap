import { APILoader } from "@canmou/react-tmap-api-loader";
import { Map } from "@canmou/react-tmap-map";
import React, { Fragment, useState } from "react";
import { Divider } from "antd";

export const MapDemo = () => {
  const [dragEnable, setDragEnable] = useState(true);
  const [display, setDisplay] = useState(true);
  const [zoom, setZoom] = useState(15);
  const [viewMode, setViewMode] = useState("3D");

  return (
    <div style={{ textAlign: "left" }}>
      <Divider />
      <div>使用方式：</div>

      <h3>基本使用方式</h3>
      <div>引入@canmou/map @canmou/api-loader</div>
      <div>
        <APILoader tkey="UBXBZ-BPTEJ-DEOFY-FAK72-P2Q7T-3GFRQ">
          <Map
            // center = [113.23, 23.16];
            // var center2 = new TMap.LatLng(center[1], center[0]);
            style={{ height: "350px" }}
            mapStyleId="style1"
            baseMap={{
              type: "vector",
              features: ["base", "point"], // 隐藏矢量文字
            }}
            minZoom={16}
            maxZoom={20}
            toggleAnimation={false}
            doubleClickZoom={false}
            viewMode={"2D"}
            showControl={false}
            businessSelectText={""}
          />
        </APILoader>
      </div>
      <Divider />
      <h3>基本使用方式-各类事件</h3>
      <div>引入@canmou/map @canmou/api-loader</div>
      <div>
        <Fragment>
          <button onClick={() => setDragEnable(!dragEnable)}>
            {dragEnable ? "禁用" : "启用"}拖拽
          </button>
          <button onClick={() => setDisplay(!display)}>
            {display ? "卸载" : "加载"}地图
          </button>
          <button onClick={() => setViewMode(viewMode === "3D" ? "2D" : "3D")}>
            {viewMode}地图
          </button>
          <button onClick={() => setZoom(zoom + 1)}>放大 +1 -> ({zoom})</button>
          <button onClick={() => setZoom(zoom - 1)}>缩小 -1 -> ({zoom})</button>
          <div style={{ width: "100%", height: 350 }}>
            {display && (
              <Map
                dragEnable={dragEnable}
                zoom={zoom}
                viewMode={viewMode}
                pitch={viewMode === "2D" ? 0 : 70}
              />
            )}
          </div>
        </Fragment>
      </div>
      <Divider />
      <h3>多个地图</h3>
      <div>引入@canmou/map @canmou/api-loader</div>
      <div>
        <APILoader tkey="UBXBZ-BPTEJ-DEOFY-FAK72-P2Q7T-3GFRQ">
          <Map style={{ height: 100, marginBottom: 10 }} />
          <div style={{ border: "1px solid red" }}>
            <Map style={{ height: 100 }} />
          </div>
        </APILoader>
      </div>
    </div>
  );
};
// export class MapDemo extends Component {
//   render() {
//     return (
//       <APILoader tkey="UBXBZ-BPTEJ-DEOFY-FAK72-P2Q7T-3GFRQ">
//         <Map style={{ width: "300px", height: "300px" }} />
//       </APILoader>
//     );
//   }
// }
