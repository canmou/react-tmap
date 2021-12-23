import { Layout, Menu } from "antd";
import { LaptopOutlined } from "@ant-design/icons";
import { mapDemo } from "./components/map-demo";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export const Main = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">TMap</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
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
              <SubMenu key="sub1" icon={<LaptopOutlined />} title="组件">
                <Menu.Item key="1">Api loader</Menu.Item>
                <Menu.Item key="2">Map</Menu.Item>
                <Menu.Item key="3">热力图</Menu.Item>
                <Menu.Item key="4">多覆盖点</Menu.Item>
                <Menu.Item key="5">中心点</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <mapDemo/>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
    //   mountNode,
  );
};
