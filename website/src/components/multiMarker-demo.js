import { Map, APILoader, requireScript, MultiMarker } from "@canmou/react-tmap";

import { useEffect, useState } from "react";
export const MultiMarkerDemo = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    if (points.length === 0) {
      requireScript("https://a.amap.com/jsapi_demos/static/citys.js").then(
        (res) => {
          // eslint-disable-next-line no-undef
          if (citys && Array.isArray(citys)) {
            // eslint-disable-next-line no-undef
            citys = citys.map(e =>  {
              delete e.name;
              delete e.style;
              e.lng = e.lnglat[0];
              e.lat = e.lnglat[1];
              return e
            })
            // eslint-disable-next-line no-undef
            setPoints(citys);
          }
        }
      );
    }
  });
  return (
    <div style={{ textAlign: "left" }}>
      <h2>点标记</h2>
      <div>
        <APILoader tkey="UBXBZ-BPTEJ-DEOFY-FAK72-P2Q7T-3GFRQ">
          <Map zoom={10}>
            <MultiMarker visiable={true} geometries={points}/>
          </Map>
        </APILoader>
      </div>
    </div>
  );
};
