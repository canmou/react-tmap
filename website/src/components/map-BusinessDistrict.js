import { APILoader } from "@canmou/react-tmap-api-loader";
import { Map } from "@canmou/react-tmap-map";
import React, { useRef, useState, useEffect } from "react";
import { Divider } from "antd";
import data from './1.json'

export const MapBusinessDistrict = () => {
  
  const indexRef = useRef();
  const multiLabel = useRef();
  const multiPolygon = useRef();
  const [rely, setRely] = useState(true)

  useEffect(() => {
    if (indexRef.current) {
      console.log(data)
      const path = []
      data.map((item,index) => {
        const northwest = new indexRef.current.TMap.LatLng(Number(item.sl.split(',')[1]), Number(item.sl.split(',')[0]))
        const center = indexRef.current.TMap.geometry.computeDestination(northwest, 135, 707)
        const northeast = indexRef.current.TMap.geometry.computeDestination(northwest, 90, 1000)
        const southeast = indexRef.current.TMap.geometry.computeDestination(northeast, 180, 1000)
        const southwest = indexRef.current.TMap.geometry.computeDestination(southeast, -90, 1000)
        path.push([northwest,northeast,southeast,southwest])
        console.log(northwest,northeast,southeast,southwest)
        multiLabel.current = new indexRef.current.TMap.MultiLabel({
          map: indexRef.current.map,
          styles: {
            label: new indexRef.current.TMap.LabelStyle({
              color: '#3777FF', // 颜色属性
              size: 14, // 文字大小属性
              offset: { x: 0, y: 0 }, // 文字偏移属性单位为像素
              angle: 0, // 文字旋转属性
              alignment: 'center', // 文字水平对齐属性
              verticalAlignment: 'middle', // 文字垂直对齐属性
            }),
          },
          geometries: [
            {
              id: 'label' + index, // 点图形数据的标志信息
              styleId: 'label', // 样式id
              position: center, // 标注点位置
              content: item.name, // 标注文本
              properties: {
                // 标注点的属性数据
                title: 'label',
              },
            },
          ],
        });
       
        return data
      })
      multiPolygon.current = new indexRef.current.TMap.MultiPolygon({
        map: indexRef.current.map, // 显示多边形图层的底图
        styles: {
          // 多边形的相关样式
          polygon: new indexRef.current.TMap.PolygonStyle({
            // color: '#fff', // 面填充色
            showBorder: true, // 是否显示拔起面的边线
            borderColor: '#00FFFF', // 边线颜色
          }),
        },
        geometries: [
          {
            id: 'polygon', // 多边形图形数据的标志信息
            styleId: 'polygon', // 样式id
            paths: path, // 多边形的位置信息
            properties: {
              // 多边形的属性数据
              title: 'polygon',
            },
          },
        ],
      });
    }
  }, [rely])

  useEffect(()=>{
    return componentWillUnmount
},[])
function componentWillUnmount() {
    // 组件销毁时你要执行的代码
    multiLabel.current && multiLabel.current.setMap(null)
    multiPolygon.current && multiPolygon.current.setMap(null)
  }
 




  return (
    <div style={{ textAlign: "left" }}>
      <Divider />
      <h2>基本使用方式</h2>

      <div>
        <APILoader tkey="UBXBZ-BPTEJ-DEOFY-FAK72-P2Q7T-3GFRQ"
          libraries="geometry">
        
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
            viewMode={"2D"}
          />


        </APILoader>
      </div>
      <Divider />
    </div>
  );
};
// export className MapDemo extends Component {
//   render() {
//     return (
//       <APILoader tkey="UBXBZ-BPTEJ-DEOFY-FAK72-P2Q7T-3GFRQ">
//         <Map style={{ width: "300px", height: "300px" }} />
//       </APILoader>
//     );
//   }
// }
