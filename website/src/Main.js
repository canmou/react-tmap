import { Layout, Menu } from "antd";
import { LaptopOutlined } from "@ant-design/icons";
import { MapDemo } from "./components/map-demo";
import { MultiMarkerDemo } from './components/multiMarker-demo';
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
          <Menu.Item key="1">TMap</Menu.Item>
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
                <Menu.Item key="1">Api loader && Map</Menu.Item>
                <Menu.Item key="2">多覆盖点</Menu.Item>
                <Menu.Item key="3">中心点</Menu.Item>
                <Menu.Item key="4">热力图</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {menuSelect === "1" && <MapDemo />}
            {menuSelect === "2" && <MultiMarkerDemo />}
            {menuSelect === "3" && <></>}
            {menuSelect === "4" && <></>}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design 2021 Created by Ant UED
      </Footer>
    </Layout>
  );
};
