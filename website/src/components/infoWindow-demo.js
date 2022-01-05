import { Map, APILoader, InfoWindow } from "@canmou/react-tmap";

export const InfoWindowDemo = () => {
  const info = [];
  info.push('<div style="background: #fff;padding: 30px">我是信息窗体</div>');
  return (
    <div style={{ textAlign: "left" }}>
      <h2>信息窗体</h2>
      <div>
        <APILoader tkey="UBXBZ-BPTEJ-DEOFY-FAK72-P2Q7T-3GFRQ">
          <Map zoom={9} center={{ lat: 23.16, lng: 113.23 }}>
            <InfoWindow
              visiable={true}
              content={info.join("")}
              enableCustom={true}
              latLng={{ lat: 23.16, lng: 113.13 }}
            />
             <InfoWindow
              visiable={true}
              content={info.join("")}
              enableCustom={true}
              latLng={{ lat: 23.16, lng: 112.13 }}
            />
            <InfoWindow
              visiable={true}
              content={info.join("")}
              enableCustom={true}
              latLng={{ lat: 22.5, lng: 113 }}
            />
          </Map>
        </APILoader>
      </div>
    </div>
  );
};
