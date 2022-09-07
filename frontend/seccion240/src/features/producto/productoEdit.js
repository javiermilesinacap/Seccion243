import { Button, Drawer, Avatar } from 'antd';
import React, { useState } from 'react';

const ProductoEdit = (props) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="site-drawer-render-in-current-wrapper">
            <p>{props.data.nombre}</p>
            <p>{props.data.precio}</p>
      <div
        style={{
          marginTop: 16,
        }}
      >
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        getContainer={false}
        style={{
          position: 'absolute',
        }}
      >

            <Button onClick={()=>{onClose()}}>Cerrar</Button>
      </Drawer>
    </div>
  );
};

export default ProductoEdit;