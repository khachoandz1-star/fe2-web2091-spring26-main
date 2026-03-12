import { Layout, Form, Input, Button } from "antd";

const { Header, Sider, Content } = Layout;

function Lab1() {
  return (
    <div style={{ position: "fixed", inset: 0, background: "white", zIndex: 999 }}>
      <Layout style={{ height: "100%" }}>
        
        <Header style={{ color: "white" }}>
          Header
        </Header>

        <Layout>
          <Sider style={{ color: "white" }}>
            Sidebar
          </Sider>

          <Content style={{ padding: 20 }}>
            <Form style={{ width: 300 }}>
              
              <Form.Item label="Name">
                <Input />
              </Form.Item>

              <Form.Item label="Email">
                <Input />
              </Form.Item>

              <Form.Item label="Password">
                <Input.Password />
              </Form.Item>

              <Button type="primary">Submit</Button>

            </Form>
          </Content>
        </Layout>

      </Layout>
    </div>
  );
}

export default Lab1;