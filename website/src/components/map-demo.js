import { APILoader } from "@canmou/react-tmap-api-loader";
import { Map } from "@canmou/react-tmap-map";
import { Test } from "./test";
export const MapDemo = () => {
  return (
    <div>
      <div>这个是一个map demo</div>
      <div>使用方式：</div>
      <div>引入@canmou/map @canmou/api-loader</div>
      <div>方式x1：</div>
      <div>
        {/* <Row gutter={16}>
          <Col className="gutter-row" span={6}>22</Col>
          <Col className="gutter-row" span={6}>33</Col>
        </Row> */}
        <Test/> 
        我是一个地图
        <APILoader tkey="UBXBZ-BPTEJ-DEOFY-FAK72-P2Q7T-3GFRQ">
          <Map style={{ width: "300px", height: "300px" }} /> 
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
