import { Table, Image, Spin } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";




const StoryList = ()=>{
    const {data,isLoading,isError}= useQuery({
        queryKey:["stories"],
        queryFn:async()=>{
            const res= await axios.get("http://localhost:3000/stories")
            return res.data;
        }
    })

    const handleDelete= async(id:number)=>{
        const confirmDelete = window.confirm("Bạn có chắc muốn xóa không?");

    if (!confirmDelete) return;
        await axios.delete(`http://localhost:3000/stories/${id}`)
    }

    const columns=[
        {
        title:"ID",
        dataIndex:"id",
    },
     {
      title: "Ảnh",
      dataIndex: "image",
      render: (url: string) => <Image src={url} width={60} />,
    },
    {
      title: "Tên truyện",
      dataIndex: "title",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
    },
    {
        title:"Created At",
        dataIndex:"createdAt",
        render: (date:string)=>new Date(date).toLocaleDateString("vi-VN")

    },
    {
        title:"Action",
        render:( _:any, record:any)=>(
            <button onClick={()=> handleDelete(record.id)}>Xóa</button>
        )
    }
]


  if (isLoading) return <Spin />;

  if (isError) return <p>Lỗi khi tải dữ liệu</p>;

  return <Table columns={columns} dataSource={data} pagination={{pageSize:5}} rowKey="id"  />;
}


export default StoryList