import React, { useState, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import request from '../Utils/request';
import { useParams, useNavigate } from 'react-router-dom';

function getAddress(params) {
  return request.get('/address/' + params.id, { params });
}

function AddressEdit() {
  const [form] = Form.useForm();
  const { addressId } = useParams();
  const navigate = useNavigate();
  const [address, setAddress] = useState({ name: 'XX', x: 0, y: 0 });

  useEffect(() => {
    getAddress({ id: addressId }).then((res) => {
      console.log(res.data);
      setAddress(res.data);
      form.setFieldsValue(res.data);
    });
  }, []);

  const onSubmit = () => {
    let values = form.getFieldsValue();
    values.id = address.id;
    request.put('/address/' + address.id, values).then((res) => {
      console.log(res);
      navigate('/address', { replace: false })
    })
  };

  return (
    <div className="App">
      <h1> 站点编辑 </h1>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={address}
        autoComplete="off"
      >
        <Form.Item label="站点名称" name="name"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="X座标" name="x"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Y座标" name="y"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label={null}>
          <h3 onClick={onSubmit}> 保存 </h3>
        </Form.Item>
      </Form>

     
    </div>
  );
}

export default AddressEdit;
