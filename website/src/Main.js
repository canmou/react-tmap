import { Layout, Menu } from "antd";
import { LaptopOutlined } from "@ant-design/icons";
import { MapDemo } from "./components/map-demo";
import { MultiMarkerDemo } from "./components/multiMarker-demo";
import { CenterDemo } from "./components/center-demo";
import { InfoWindowDemo } from "./components/infoWindow-demo";
import { HeatDemo } from "./components/heat-demo";
import { CustomInfoWindowDemo } from './components/custom-infoWindow-demo';
import { MapOverlayWmsDemo } from './components/map-overlay-wms-demo';
import { MapOverlayImageDemo } from './components/map-overlay-image-demo';
import { MapSquareGridDemo } from './components/map-squareGrid';
import { MapCoordinate } from './components/map-coordinate';
import { MapMarkPoints } from './components/map-markPoints';
import { MapBusinessDistrict } from './components/map-BusinessDistrict';
import { useState } from "react";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export const Main = () => {
  const [menuSelect, setMenuSelect] = useState("1");
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">React-TMap</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
            >
              <SubMenu
                key="sub1"
                icon={<LaptopOutlined />}
                title="组件"
                onClick={(event) => {
                  console.log(event);
                  setMenuSelect(event.key);
                }}
              >
                <Menu.Item key="1">ApiLoader/Map组件</Menu.Item>
                <Menu.Item key="2">点标记/文本标记</Menu.Item>
                <Menu.Item key="3">中心点</Menu.Item>
                <Menu.Item key="4">消息窗体</Menu.Item>
                <Menu.Item key="5">热力图</Menu.Item>
                <Menu.Item key="6">自定义信息窗体</Menu.Item>
                <Menu.Item key="7">瓦片相关[wms瓦片]</Menu.Item>
                <Menu.Item key="8">瓦片相关[图片瓦片]</Menu.Item>
                <Menu.Item key="9">地图行政区生成切分方格数据</Menu.Item>
                <Menu.Item key="10">地图点标记</Menu.Item>
                <Menu.Item key="11">地图坐标拾取</Menu.Item>
                <Menu.Item key="12">地图商圈划分</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {menuSelect === "1" && <MapDemo />}
            {menuSelect === "2" && <MultiMarkerDemo />}
            {menuSelect === "3" && <CenterDemo />}
            {menuSelect === "4" && <InfoWindowDemo />}
            {menuSelect === "5" && <HeatDemo />}
            {menuSelect === "6" && <CustomInfoWindowDemo />}
            {menuSelect === "7" && <MapOverlayWmsDemo />}
            {menuSelect === "8" && <MapOverlayImageDemo />}
            {menuSelect === "9" && <MapSquareGridDemo />}
            {menuSelect === "10" && <MapMarkPoints />}
            {menuSelect === "11" && <MapCoordinate />}
            {menuSelect === "12" && <MapBusinessDistrict />}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design 2021 Created by Ant UED
      </Footer>
    </Layout>
  );
};
