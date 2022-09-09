import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React from 'react';
const { Meta } = Card;

const Tarjeta = (props) => (
  <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src={props.data.imagen}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    $ {props.data.precio}
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={props.data.nombre}
      description={props.data.descripcion}
    />
  </Card>
);

export default Tarjeta;