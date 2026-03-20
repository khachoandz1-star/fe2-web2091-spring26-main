import { Form, Input, Button,Spin,message } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export function EditStory() {
    const [form] = Form.useForm();
    const {id} = useParams();
    const navigate=useNavigate();
    const queryClient=useQueryClient();

    //lấy dữ liệu
    const {data,isLoading}=useQuery({
        queryKey:["story",id],
        queryFn:async()=>{
            const res=await axios.get(`http://localhost:3000/stories/${id}`);
            return res.data;

        }
    })

    //đổ dữ liệu vào form
    useEffect(()=>{
        if(data){
            form.setFieldsValue(data);

        }
    },[data]);

    const mutation=useMutation({
        mutationFn:async(value:any)=>{
            return axios.put(`http://localhost:3000/stories/${id}`,value)
        },

        onSuccess:()=>{
            //reload list
            queryClient.invalidateQueries({queryKey:["stories"]});
             navigate("/lab5");
             message.success("Cập nhập thành công")
        }
    })

    const onfinish=(value:any)=>{
        mutation.mutate(value)
    }

    if (isLoading) return <Spin />;


    return (
        <Form layout="vertical" onFinish={onfinish} form={form} disabled={isLoading}>
            <Form.Item name="title" label="Tên truyện" rules={[{required:true,message:"Vui lòng nhập tên truyện"}]}>
                <Input></Input>
            </Form.Item>
            <Form.Item name="author" label="Tác giả"rules={[{required:true,message:"Vui lòng nhập tên tác giả"}]}>
                <Input />
            </Form.Item>

            <Form.Item name="image" label="Ảnh">
                <Input />
            </Form.Item>

            <Form.Item name="description" label="Mô tả">
                <Input.TextArea />
            </Form.Item>

            <Button type="primary" htmlType="submit" loading={mutation.isPending}>
                Cập nhật
            </Button>
        </Form>
    )
}

export default EditStory