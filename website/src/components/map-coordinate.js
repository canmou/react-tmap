import { APILoader } from "@canmou/react-tmap-api-loader";
import { Map } from "@canmou/react-tmap-map";
import React, { useRef, useState, useEffect } from "react";
import { Divider } from "antd";

export const MapCoordinate = () => {
    // const [dragEnable, setDragEnable] = useState(true);
    const indexRef = useRef();
    const searchKeywordRef = useRef();
    const searchCoordinateRef = useRef();
    const markers = useRef();
    const infoWindowList = useRef([]);
    const multiLabel = useRef();


    const [rely, setRely] = useState(true)
    
    async function searchByKeyword(keyword) {
        // 关键字搜索功能
        const search = new indexRef.current.TMap.service.Search({ pageSize: 5 }); // 新建一个地点搜索类
        if(markers.current === undefined){
            markers.current = new indexRef.current.TMap.MultiMarker({
                map: indexRef.current.map,
                zIndex: 100,
                geometries: [],
            });
        }
        if(infoWindowList.current){
            infoWindowList.current.forEach((infoWindow) => {
                infoWindow.close();
            });
            infoWindowList.current.length = 0;
        }
        
        markers.current.setGeometries([]);
        const geocoder = new indexRef.current.TMap.service.Geocoder()
        const result = await geocoder.getAddress({ location: indexRef.current.map.getCenter() });

        search
            .searchRegion({
                keyword: keyword,
                cityName: result.result.address_component.city,
            })
            .then((result) => {
                indexRef.current.map.setCenter(result.data[0].location)
                result.data.forEach((item, index) => {
                    var geometries = markers.current.getGeometries();
                    var infoWindow = new indexRef.current.TMap.InfoWindow({
                        map: indexRef.current.map,
                        position: item.location,
                        content: `<h3>${item.title}</h3><p>地址：${item.address}</p><p>电话：${item.tel}</p><p>坐标：${item.location.lat},${item.location.lng}</p>`,
                        offset: { x: 0, y: -50 },
                    });
                    infoWindow.close();
                    infoWindowList.current[index] = infoWindow;
                    geometries.push({
                        id: String(index),
                        position: item.location,
                    });
                    markers.current.updateGeometries(geometries);
                    markers.current.on('click', (e) => {
                        infoWindowList.current[Number(e.geometry.id)].open();
                        document.getElementById('resultCoordinate').value= `${e.geometry.position.lat},${e.geometry.position.lng}`
                    });
                    
                });
            });
    }
    useEffect(() => {
        if(indexRef.current){
            indexRef.current.map.on('mousemove',(e)=>{
                console.log(e)
                if(multiLabel.current){
                    multiLabel.current.setMap(null)
                }
                 multiLabel.current = new indexRef.current.TMap.MultiLabel({
                    map: indexRef.current.map,
                    styles: {
                      label: new indexRef.current.TMap.LabelStyle({
                        color: '#3777FF', // 颜色属性
                        size: 14, // 文字大小属性
                        offset: { x: 0, y: 0 }, // 文字偏移属性单位为像素
                        angle: 0, // 文字旋转属性
                        alignment: 'left', // 文字水平对齐属性
                        verticalAlignment: 'middle', // 文字垂直对齐属性
                      }),
                    },
                    geometries: [
                      {
                        id: 'label', // 点图形数据的标志信息
                        styleId: 'label', // 样式id
                        position: e.latLng, // 标注点位置
                        content: `${e.latLng.lat.toFixed(6)},${e.latLng.lng.toFixed(6)}`, // 标注文本
                        properties: {
                          // 标注点的属性数据
                          title: 'label',
                        },
                      },
                    ],
                  });
            })

            indexRef.current.map.on('click',(e)=>{
                document.getElementById('resultCoordinate').value = `${e.latLng.lat.toFixed(6)},${e.latLng.lng.toFixed(6)}`
            })
        }
    },[rely])
    useEffect(()=>{
        return componentWillUnmount
    },[])
    function componentWillUnmount() {
        // 组件销毁时你要执行的代码
        markers.current.setMap(null)
        multiLabel.current.setMap(null)
      }
 

    return (
        <div style={{ textAlign: "left" }}>
            <Divider />
            <h2>基本使用方式</h2>

            <div>
                <APILoader tkey="UBXBZ-BPTEJ-DEOFY-FAK72-P2Q7T-3GFRQ">
                    <div id="panel" style={{ display: 'flex', marginBottom: 10 }}>
                        <div className="input-item" style={{ marginRight: 20 }}>
                            <div className="title">关键字搜索</div>
                            <input id='keyword' style={{ width: 200, marginRight: 20 }} 
                             onKeyUp={(e) => {
                                if(e.code === 'Enter'){
                                    searchByKeyword(searchKeywordRef.current)
                                }
                            }}
                            onChange={(e) => {
                                console.log(e.target.value)
                                searchKeywordRef.current = e.target.value
                            }}
                            onFocus={()=>{
                                document.getElementById('coordinate').value= ''
                            }}
                            ></input>
                            <button onClick={() => {
                                console.log(searchKeywordRef.current,indexRef.current)
                                if(indexRef.current){
                                    searchByKeyword(searchKeywordRef.current)
                                }
                                
                            }}>搜索</button>
                        </div>
                        <div className="input-item" style={{ marginRight: 20 }}>
                            <div className="title">坐标搜索</div>
                            <input id='coordinate' style={{ width: 200, marginRight: 20 }} 
                             onKeyUp={(e) => {
                                if(e.code === 'Enter'){
                                    if (indexRef.current) {
                                        console.log(indexRef.current, searchCoordinateRef.current.split(','))
                                        indexRef.current.map.setCenter(new indexRef.current.TMap.LatLng(Number(searchCoordinateRef.current.split(',')[0]), Number(searchCoordinateRef.current.split(',')[1])))
                                        document.getElementById('resultCoordinate').value = `${Number(searchCoordinateRef.current.split(',')[0])},${Number(searchCoordinateRef.current.split(',')[1])}`
                                        if (markers.current === undefined) {
                                            markers.current = new indexRef.current.TMap.MultiMarker({
                                                map: indexRef.current.map,
                                                geometries: [],
                                            });
                                        }
                                        markers.current.setGeometries([]);
                                        markers.current.updateGeometries({
                                            position: new indexRef.current.TMap.LatLng(Number(searchCoordinateRef.current.split(',')[0]), Number(searchCoordinateRef.current.split(',')[1])),
                                        });
                                    }
                                }
                            }}
                            onChange={(e) => {
                                console.log(e.target.value)
                                searchCoordinateRef.current = e.target.value
                            }}
                            onFocus={()=>{
                                document.getElementById('keyword').value= ''
                            }}
                            ></input>
                            <button onClick={() => {
                                if(indexRef.current){
                                    console.log(indexRef.current,searchCoordinateRef.current.split(','))
                                    indexRef.current.map.setCenter(new indexRef.current.TMap.LatLng(Number(searchCoordinateRef.current.split(',')[0]), Number(searchCoordinateRef.current.split(',')[1])))
                                    document.getElementById('resultCoordinate').value= `${Number(searchCoordinateRef.current.split(',')[0])},${Number(searchCoordinateRef.current.split(',')[1])}`
                                    if(markers.current === undefined){
                                        markers.current = new indexRef.current.TMap.MultiMarker({
                                            map: indexRef.current.map,
                                            geometries: [],
                                        });
                                    }
                                    markers.current.setGeometries([]);
                                    markers.current.updateGeometries({
                                        position: new indexRef.current.TMap.LatLng(Number(searchCoordinateRef.current.split(',')[0]), Number(searchCoordinateRef.current.split(',')[1])),
                                    });
                                }
                            }}>搜索</button>
                        </div>
                        <div className="input-item" style={{ marginRight: 20 }}>
                            <div className="title">坐标结果</div>
                            <input id='resultCoordinate' style={{ width: 200, }} ></input>
                        </div>
                    </div>
                    <Map
                        center={[23.16, 113.23]}
                        zoom={14}
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
