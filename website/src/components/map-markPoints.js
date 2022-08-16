import { APILoader } from "@canmou/react-tmap-api-loader";
import { Map } from "@canmou/react-tmap-map";
import React, { useRef, useState, useEffect } from "react";
import { Divider } from "antd";
import testPng from '../public/icon-position-sign.png'

export const MapMarkPoints = () => {
  // const [dragEnable, setDragEnable] = useState(true);
  const [rely, setRely] = useState(true);
  const indexRef = useRef();
  const multiMarker = useRef();
  const multiMarkeres = useRef();

 
  useEffect(() => {
    if (indexRef.current ) {
      const testCoordinate = [
        [23.123706822196315, 113.314025019255,'五羊新村-289艺术园区'],
        [23.117099942493788, 113.3123627311973,'五羊新城-E16栋'],
        [23.13568848080515, 113.33904550467932,'天河-龙口东-摩登百货(岗顶店)'],
        [23.1452224591071, 113.34088359171906,'天河-龙口东-国六宝肉菜市场(林和苑店)'],
        [23.12554989916288, 113.2551574630543,'越秀-西门口-中山六路232-238号'],
        [23.124239978900015, 113.2542760148125,'越秀-西门口-光塔路/人民高架路(路口)'],
        [23.113849205342934, 113.42053922932298,'天河-珠村-珠村力子园1号'],
        [23.117711143661484, 113.4194672857964,'天河-珠村-珠村牌坊-广州市天河区'],
        [23.097268785559283, 113.27563197795841,'江南西-天汇大厦'],
        [23.092306415671757, 113.26905970749611,'江南西-青蒲大街'],
        [22.990770188846678, 113.34965095210073,'南村万博-里仁洞村'],
        [22.997564609743055, 113.34694597264316,'南村万博-里仁洞336号之一'],
      ]
      testCoordinate.map((item,index) => {
        // 初始化polygon
        multiMarker.current = new indexRef.current.TMap.MultiMarker({
          map: indexRef.current.map,
          styles: {
            // 点标记样式
            marker: new indexRef.current.TMap.MarkerStyle({
              width: 10, // 样式宽
              height: 10, // 样式高
              anchor: { x: -25, y: -25 }, // 描点位置
              src: testPng,
              
            }),
          },
          geometries: [
            // 点标记数据数组
            {
              // 标记位置(纬度，经度，高度)
              position: new indexRef.current.TMap.LatLng(item[0],item[1]),
              id: 'marker' + index,
              // styleId: 'myMarker',
              content: item[2],
            },
          ],
        });
        return testCoordinate
      })
      const testCoordinates = [
        [23.091709696178192, 113.24352873599442,'荔湾-芳村-芳村大道东190号'],
        [23.10605953811684, 113.27058334901051,'海珠-江南大道中-市二宫地铁口沿街旺铺'],
        [23.136787187174676, 113.32628511235056,'越秀-北京路-天河路299号'],
        [23.135319388130224, 113.3248222121228,'越秀-北京路-时尚天河商业广场'],
        [23.12398243998205, 113.40534848727525,'天河-东圃-黄村西路81号'],
        [23.120383747296092, 113.40103260519429,'天河-东圃-东圃大马路'],
        [23.121423659921447, 113.37485601392595,'天河棠东村口-中山大道西,近科韵路'],
        [23.128995314284882, 113.38354759622622,'天河-棠东-棠东丰乐路'],
      ]
      testCoordinates.map((item,index) => {
        // 初始化polygon
        multiMarkeres.current = new indexRef.current.TMap.MultiMarker({
          map: indexRef.current.map,
          styles: {
            // 点标记样式
            'myMarker': new indexRef.current.TMap.MarkerStyle({
              width: 50, // 样式宽
              height: 50, // 样式高
              anchor: { x: -25, y: -25 }, // 描点位置
              src: testPng,
              
            }),
          },
          geometries: [
            // 点标记数据数组
            {
              // 标记位置(纬度，经度，高度)
              position: new indexRef.current.TMap.LatLng(item[0],item[1]),
              id: 'marker' + index,
              styleId: 'myMarker',
              content: item[2],
            },
          ],
        });
        return testCoordinates
      })



    }
  }, [rely])
  useEffect(()=>{
    return componentWillUnmount
},[])
function componentWillUnmount() {
    // 组件销毁时你要执行的代码
    multiMarker.current.setMap(null)
    multiMarkeres.current.setMap(null)
  }

  return (
    <div style={{ textAlign: "left" }}>
      <Divider />
      <h2>基本使用方式</h2>

      <div>
        <APILoader tkey="UBXBZ-BPTEJ-DEOFY-FAK72-P2Q7T-3GFRQ">
          <Map
            center={[23.16, 113.23]}
            zoom={10}
            // var center2 = new TMap.LatLng(center[1], center[0]);
            style={{ height: "800px" }}
            mapStyleId="style1"
            baseMap={{
              type: "vector",
              features: ["base", "point"], // 隐藏矢量文字
            }}
            ref={(instance) => {
              if (instance && instance.map && instance.TMap) {
                indexRef.current = instance;
                setRely(false)
              }
            }}
            toggleAnimation={false}
            doubleClickZoom={false}
            viewMode={"2D"}
            showControl={false}
            businessSelectText={""}
          />


        </APILoader>
      </div>
      <Divider />
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
