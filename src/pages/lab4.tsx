import { useMutation } from "@tanstack/react-query";
import { Form, Input, Button } from "antd";
import axios from "axios";
import toast from "react-hot-toast";

interface IStory {
  title: string
  author: string
  image: string
  description: string
}

interface ICategory {
  name: string
}



export default function StoryForm() {
  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: async (value: IStory) => {
      await axios.post("http://localhost:3000/stories", value);
    },
    onSuccess: () => {
      toast.success("Thêm truyện thành công");
    },
    onError: () => {
      toast.error("Có lỗi xảy ra");
    },
  });

  const { mutate: addCategory, isPending: loadingCategory } = useMutation({
    mutationFn: async (value: ICategory) => {
      await axios.post("http://localhost:3000/categories", value);
    },
    onSuccess: () => {
      toast.success("Thêm danh mục thành công");
    },
    onError: () => {
      toast.error("Thêm danh mục thất bại");
    },
  });

  const onFinish = (value: IStory) => {
    console.log("Success", value);
    mutate(value);
  };

  const onFinishCategory = (value: ICategory) => {
    console.log("Category:", value);
    addCategory(value);
  };

  return (
    <div>
      <h2>Thêm truyện</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Title" name="title">
          <Input />
        </Form.Item>

        <Form.Item label="Author" name="author">
          <Input />
        </Form.Item>

        <Form.Item label="Image" name="image">
          <Input />
        </Form.Item>

        <Form.Item label="Mô tả" name="description">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Button htmlType="submit" loading={isPending}>
          Submit
        </Button>

        {isSuccess && <p>Story submitted successfully!</p>}
      </Form>


      


      <h2>Thêm danh mục</h2>
      <Form layout="vertical" onFinish={onFinishCategory}>
        <Form.Item
          label="Tên danh mục"
          name="name"
          rules={[{ required: true, message: "Nhập tên danh mục" }]}
        >
          <Input />
        </Form.Item>

        <Button htmlType="submit" loading={loadingCategory}>
          Thêm danh mục
        </Button>
      </Form>
    </div>
  );
}