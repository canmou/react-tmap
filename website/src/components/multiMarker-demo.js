import { APILoader } from "@canmou/react-tmap-api-loader";
import { Map } from "@canmou/react-tmap-map";
export const MultiMarkerDemo = () => {
  return (
    <div style={{textAlign: 'left'}}>
      <div>这个是一个点标记/文本标记</div>
      <div>使用方式：</div>
      <div>引入@canmou/map @canmou/api-loader</div>
      <div>
        我是一个地图
        <APILoader tkey="UBXBZ-BPTEJ-DEOFY-FAK72-P2Q7T-3GFRQ">
          <Map style={{ width: "600px", height: "350px" }} /> 
        </APILoader>
      </div>
    </div>
  );
};