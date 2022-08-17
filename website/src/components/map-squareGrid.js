import { APILoader } from "@canmou/react-tmap-api-loader";
import { Map } from "@canmou/react-tmap-map";
import React, { useRef, useState, useEffect } from "react";
import { Divider } from "antd";
import * as turf from '@turf/turf'
import squareGrid from '@turf/square-grid';
import bbox from '@turf/bbox';
import testPng from '../public/icon-position-sign.png'

export const MapSquareGridDemo = () => {
  // const [dragEnable, setDragEnable] = useState(true);
  const [display, setDisplay] = useState(true);
  const [zoom, setZoom] = useState(15);
  const [viewMode, setViewMode] = useState("3D");
  const indexRef = useRef();
  const district = useRef();
  const polygons = useRef();
  const [cityBoundsArray,setCityBoundsArray] = useState([]);
  const [districtBoundsArray,setDistrictBoundsArray] = useState([]);
  const [rely, setRely] = useState(true)


  let provinceSelect = document.getElementById('province');
  let citySelect = document.getElementById('city');
  let districtSelect = document.getElementById('district');
  let provinceList = [];
  const cityList = useRef([]);
  const districtList = useRef([]);
  useEffect(() => {
    if (indexRef.current) {
      district.current = new indexRef.current.TMap.service.District({
        // 新建一个行政区划类
        polygon: 2, // 返回行政区划边界的类型
      });
      polygons.current = new indexRef.current.TMap.MultiPolygon({
        map: indexRef.current.map,
        geometries: [],
      });
      district.current.getChildren().then((result) => {
        // 获取省市区列表及其边界信息
        provinceList = result.result[0];
        provinceSelect.add(new Option('---请选择---', null));
        provinceList.forEach((province, index) => {
          provinceSelect.add(new Option(province.fullname, index));
        });
        citySelect.innerHTML = '';
        districtSelect.innerHTML = '';
      });
    }
  }, [rely])


  function search(selector) {
    if (selector.id === 'province' && selector.value) {
      citySelect.innerHTML = '';
      districtSelect.innerHTML = '';
      citySelect.add(new Option('---请选择---', null));
      district.current
        .getChildren({ id: provinceList[selector.value].id })
        .then((result) => {
          // 根据选择的省市区获取其下级行政区划及其边界
          cityList.current = result.result[0];
          cityList.current.forEach((city, index) => {
            citySelect.add(new Option(city.fullname, index));
          });
        });
        console.log(selector.value)
      drawPolygon(
        provinceList[selector.value].id,
        provinceList[selector.value].polygon
      ); // 根据所选区域绘制边界
    } else if (selector.id === 'city' && selector.value) {
      districtSelect.innerHTML = '';
      districtSelect.add(new Option('---请选择---', null));
      district.current.getChildren({ id: cityList.current[selector.value].id }).then((result) => {
        
        // 根据选择的地级市或直辖市区获取其下级行政区划及其边界
        if (result.result[0].length > 0 && result.result[0][0].id.length > 6) {
          // 直辖市的区的下级即为街道级，故略过一级
          districtList.current = [];
          districtSelect.innerHTML = '';
          districtSelect.add(new Option('---------', null));
        } else {
          // 非直辖市的地级市之下有区县级
          districtList.current = result.result[0];
          districtList.current.forEach((item, index) => {
            districtSelect.add(new Option(item.fullname, index));
          });
        }
      });
      console.log(selector.value)
      setCityBoundsArray(cityList.current[selector.value].polygon)
      drawPolygon(cityList.current[selector.value].id, cityList.current[selector.value].polygon);
      
      // 根据所选区域绘制边界
    } else if (selector.id === 'district' && selector.value) {
        setDistrictBoundsArray(districtList.current[selector.value].polygon)
      drawPolygon(
        districtList.current[selector.value].id,
        districtList.current[selector.value].polygon
      );
    } 
  }
  function drawPolygon(placeId, polygonArray) {
    // 根据多边形顶点坐标数组绘制多边形
    polygons.current.remove(polygons.current.getGeometries().map((item) => item.id));
    var bounds = [];
    var newGeometries = polygonArray.map((polygon, index) => {
      bounds.push(fitBounds(polygon));
      return {
        id: `${placeId}_${index}`,
        paths: polygon,
      };
    });
    bounds = bounds.reduce((a, b) => {
      return fitBounds([
        a.getNorthEast(),
        a.getSouthWest(),
        b.getNorthEast(),
        b.getSouthWest(),
      ]);
    });
    polygons.current.updateGeometries(newGeometries);
    indexRef.current.map.fitBounds(bounds);
  }
  function fitBounds(latLngList) {
    // 由多边形顶点坐标数组计算能完整呈现该多边形的最小矩形范围
    if (latLngList.length === 0) {
      return null;
    }
    var boundsN = latLngList[0].getLat();
    var boundsS = boundsN;
    var boundsW = latLngList[0].getLng();
    var boundsE = boundsW;
    latLngList.forEach((point) => {
      point.getLat() > boundsN && (boundsN = point.getLat());
      point.getLat() < boundsS && (boundsS = point.getLat());
      point.getLng() > boundsE && (boundsE = point.getLng());
      point.getLng() < boundsW && (boundsW = point.getLng());
    });
    return new indexRef.current.TMap.LatLngBounds(
      new indexRef.current.TMap.LatLng(boundsS, boundsW),
      new indexRef.current.TMap.LatLng(boundsN, boundsE)
    );
  }

  useEffect(() => {
    if (cityBoundsArray.length>0) {
      // console.log(cityBoundsArray)
      let result = []
      cityBoundsArray.forEach((item,index) => {
        result = result.concat(item)
      })
      const res = []
      result.map((item) => {
          res.push([item.lng, item.lat])
        
      })
      // console.log(res)

      const line = turf.lineString(res);
      const bbox = turf.bbox(line)
      const cellSide = 3;
      const options = { units: 'kilometers' };
      const squareGrids = squareGrid(bbox, cellSide, options);

      // console.log('123456', line, bbox, squareGrids)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      let square = []
      squareGrids.features.map((item, index) => {
        item.geometry.coordinates[0].pop()
        square.push(item.geometry.coordinates[0])
      })
      console.log('市方格数据',square)
    }
  }, [cityBoundsArray])
  useEffect(() => {
    if (districtBoundsArray.length>0) {
      // console.log(districtBoundsArray)
      let result = []
      districtBoundsArray.forEach((item,index) => {
        result = result.concat(item)
      })
      const res = []
      result.map((item) => {
          res.push([item.lng, item.lat])
        
      })
      // console.log(res)

      const line = turf.lineString(res);
      const bbox = turf.bbox(line)
      const cellSide = 3;
      const options = { units: 'kilometers' };
      const squareGrids = squareGrid(bbox, cellSide, options);

      // console.log('123456', line, bbox, squareGrids)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      let square = []
      squareGrids.features.map((item, index) => {
        item.geometry.coordinates[0].pop()
        square.push(item.geometry.coordinates[0])
      })
      console.log('区或地级市方格数据',square)
    }
  }, [districtBoundsArray])


  return (
    <div style={{ textAlign: "left" }}>
      <Divider />
      <h2>基本使用方式</h2>

      <div>
        <APILoader tkey="UBXBZ-BPTEJ-DEOFY-FAK72-P2Q7T-3GFRQ">
          <div id="panel" style={{ display: 'flex', marginBottom: 20 }}>
            <div className="input-item" style={{ marginRight: 30, }}>
              <div className="title">省市区</div>
              <select id='province' style={{ width: 200, }} onChange={(e) => {
                if (indexRef.current) {
                  search(e.target)
                }
              }}></select>
            </div>
            <div className="input-item" style={{ marginRight: 30, }}>
              <div className="title">地级市</div>
              <select id='city' style={{ width: 200, }} onChange={(e) => {
                if (indexRef.current) {
                  search(e.target)
                }
              }}></select>
            </div>
            <div className="input-item" style={{ marginRight: 30, }}>
              <div className="title">区县</div>
              <select id='district' style={{ width: 200, }} onChange={(e) => {
                if (indexRef.current) {
                  search(e.target)
                }
              }}></select>
            </div>
          </div>
          <Map
            center={[23.16, 113.23]}
            zoom={8}
            // var center2 = new TMap.LatLng(center[1], center[0]);
            style={{ height: "800px" }}
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
