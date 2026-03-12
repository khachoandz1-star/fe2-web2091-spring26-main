import {Table,Button,Space,Tag} from "antd"

function Lab2(){

    const columns=[
        {
            title:"ID",
            dataIndex:"id"
        },
        {
            title:"Name",
            dataIndex:"name"
        },
        {
            title:"Age",
            dataIndex:"age"
        },
        {
            title:"Major",
            dataIndex:"major"
        },
       
    ];

    const data=[
        {
            key:1,
            id:1,
            name:"Hoàn",
            age:20,
            major:"IT"
        },
        {
            key:2,
            id:2,
            name:"Hoàng",
            age:21,
            major:"Toán"
        },
    ]

     const productColumns=[
        {
            title:"ID",
            dataIndex:"id"
        },
        {
            title:"Product Name",
            dataIndex:"name"
        },
        {
            title:"Price",
            dataIndex:"price"
        },
        {
            title:"Category",
            dataIndex:"category"
        }
    ]

    const productData=[
        {key:1,id:1,name:"Laptop",price:1000,category:"Máy tính"},
        {key:2,id:2,name:"Iphone 17 promax",price:17700,category:"Điện thoại"},
        {key:3,id:3,name:"Dép",price:120,category:"Thời trang"},
       
    ]

    const userColumns = [
    {
        title:"ID",
        dataIndex:"id"
    },
    {
        title:"Name",
        dataIndex:"name"
    },
    {
        title:"Email",
        dataIndex:"email"
    },
    {
        title:"Status",
        dataIndex:"status",
        render:(status)=>(
            <Tag color={status === "active" ? "green" : "red"}>
                {status}
            </Tag>
        )
    },
    {
        title:"Action",
        render:()=>(
            <Space>
                <Button type="primary">Edit</Button>
                <Button danger>Delete</Button>
            </Space>
        )
    }
]

const userData=[
    {key:1,id:1,name:"Hoàn",email:"hoan@gmail.com",status:"active"},
    {key:2,id:2,name:"Hoàng",email:"hoang@gmail.com",status:"inactive"},
    {key:3,id:3,name:"Nam",email:"nam@gmail.com",status:"active"},
]

    return (
        <div style={{padding:20}}>
            <Table columns={columns} dataSource={data}/>
            <h2 style={{marginTop:40}}>Danh sách sản phẩm</h2>
            <Table 
                columns={productColumns} 
                dataSource={productData}
                pagination={{pageSize:3}}
            />
            <h2 style={{marginTop:40}}>User Management</h2>

<Table 
    columns={userColumns}
    dataSource={userData}
/>

        </div>
    )
}

export default Lab2;
