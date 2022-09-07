import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Drawer } from 'antd';
import React from 'react';
import './Producto.css';
import ProductoEdit from './productoEdit';

const { Meta } = Card;

const handleEdit = (id) => {
    console.log("HICE CLICK",id)
}
const Producto = (props) =>{
    
    return (
        <Card
          style={{
            width: 300,
          }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" onClick={()=>handleEdit(props.data.id)} />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
            <ProductoEdit data={props.data} />
        </Card>
      );
}

export default Producto;