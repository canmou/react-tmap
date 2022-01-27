import { Map, APILoader, MultiMarker } from "@canmou/react-tmap";

export const CenterDemo = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <h2>中心点</h2>
      <div>
        <APILoader tkey="UBXBZ-BPTEJ-DEOFY-FAK72-P2Q7T-3GFRQ">
          {/* libraries="service,geometry,visualization"
        > */}
          <Map
            zoom={13}
            center={{ lat: 23.16, lng: 113.23 }}
            onClick={() => {
              console.log("点击事件！");
            }}
            onMoveEnd={() => {
              console.log("触碰后松开");
            }}
            minZoom={10}
            scrollwheel={false}
            disableDoubleClickZoom={true}
          >
            {({ TMap, map, container }) => {
              console.log("map", map);
            }}
            <MultiMarker visiable={true} />
          </Map>
        </APILoader>
      </div>
    </div>
  );
};
