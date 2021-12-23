import { APILoader } from "@canmou/react-tmap-api-loader";
import { Map } from "@canmou/react-tmap-map";

export const mapDemo = () => {
  return (
    <div>
      <div>这个是一个map demo</div>
      <div>使用方式：</div>
      <div>引入@canmou/map @canmou/api-loader</div>
      <div>方式1：</div>
      <div>
        我是一个地图
        <APILoader tkey="a7a90e05a37d3f6bf76d4a9032fc9129">
          <Map />
        </APILoader>
      </div>
    </div>
  );
};
