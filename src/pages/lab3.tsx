import { Form, Input, Button, InputNumber, Select } from "antd"
import { useState } from "react"
const Lab3 = () => {

    const [post, setPost] = useState<any>(null)
    const onFinishLogin = (value: any) => {
        console.log("Form data", value);
    };

    const onFinishRegister = (value: any) => {
        console.log("Register data:", value);
    };
    const onFinishProduct = (value: any) => {
        console.log("Product data:", value);
    };

    const onFinishPost = (value: any) => {
        setPost(value)
        console.log("Post data:", value);
    };


    return (
        <div>
            <h1>Đăng Nhập</h1>
            <Form layout="vertical" onFinish={onFinishLogin} style={{ maxWidth: 400 }}>

                <Form.Item label="Email" name="email" rules={[{
                    required: true, message: "Vui lòng nhập email"
                }]}>
                    <Input></Input>
                </Form.Item>

                <Form.Item label="Password" name="password" rules={[{
                    required: true, message: "Nhập password"
                }]}>
                    <Input.Password></Input.Password>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">Login</Button>
                </Form.Item>


            </Form>



            <h1>Đăng Ký</h1>
            <Form layout="vertical" onFinish={onFinishRegister} style={{ maxWidth: 400 }}>

                <Form.Item label="Name" name="name" rules={[{
                    required: true,
                }]}>
                    <Input></Input>
                </Form.Item>

                <Form.Item label="Email" name="email" rules={[{
                    required: true, message: "Nhập Email", type: "email",
                }]}>
                    <Input></Input>
                </Form.Item>

                <Form.Item label="Phone" name="phone" rules={[{
                    required: true, type: "number"
                }]}>
                    <Input></Input>
                </Form.Item>

                <Form.Item label="Password" name="password" rules={[{
                    required: true, message: "Nhập password", min: 6, max: 50
                }]}>
                    <Input.Password></Input.Password>
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    name="confirm"
                    dependencies={["password"]}
                    rules={[
                        { required: true, message: "Nhập lại password" },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                return value === getFieldValue("password")
                                    ? Promise.resolve()
                                    : Promise.reject("Password không khớp");
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">Đăng ký</Button>
                </Form.Item>


            </Form>
            <h1>Thêm sản phẩm</h1>

            <Form layout="vertical" onFinish={onFinishProduct} style={{ maxWidth: 400 }}>

                <Form.Item
                    label="Tên sản phẩm"
                    name="name"
                    rules={[{ required: true, message: "Nhập tên sản phẩm" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Giá"
                    name="price"
                    rules={[{ required: true, message: "Nhập giá" }]}
                >
                    <InputNumber style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    label="Số lượng"
                    name="quantity"
                    rules={[{ required: true, message: "Nhập số lượng" }]}
                >
                    <InputNumber style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                    label="Mô tả"
                    name="description"
                >
                    <Input.TextArea />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Thêm sản phẩm
                    </Button>
                </Form.Item>

            </Form>

            <Form layout="vertical" onFinish={onFinishPost} style={{ maxWidth: 400 }}>

                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: "Nhập title" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Slug"
                    name="slug"
                    rules={[{ required: true, message: "Nhập slug" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Category"
                    name="category"
                    rules={[{ required: true, message: "Chọn category" }]}
                >
                    <Select
                        options={[
                            { value: "tech", label: "Tech" },
                            { value: "news", label: "News" },
                            { value: "life", label: "Life" }
                        ]}
                    />
                </Form.Item>

                <Form.Item
                    label="Content"
                    name="content"
                >
                    <Input.TextArea />
                </Form.Item>

                <Form.Item
                    label="Image URL"
                    name="image"
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>

            {post && (
                <div style={{ marginTop: 20 }}>
                    <h2>Dữ liệu đã nhập</h2>
                    <p>Title: {post.title}</p>
                    <p>Slug: {post.slug}</p>
                    <p>Category: {post.category}</p>
                    <p>Content: {post.content}</p>
                    <p>Image: {post.image}</p>
                </div>
            )}



        </div>



    )
}

export default Lab3