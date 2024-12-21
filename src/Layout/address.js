import { useState, useEffect } from 'react';
import 'antd/dist/reset.css'
import { Button, Table, Space, Tag } from 'antd'
import request from '../Utils/request';
import { useNavigate, Link } from 'react-router-dom';


function getAddressList(params) {
  return request.get('/address', { params });
}

function Main() {
  const [addresslist, setAddressList] = useState([]);

  useEffect(() => {
    getAddressList().then((res) => {
      let list = res.data.map((row) => {
        row.key = row.id;
        return row;
      });
      setAddressList(list);
    });
  }, []);

  const columns = [
    {
      title: '站点',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'x',
      dataIndex: 'x',
    },
    {
      title: 'y',
      dataIndex: 'y',
    },

    {
      title: '操作',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/address_edit/${record.id}`}>编辑</Link>
        </Space>
      ),
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p style={{ height: 250, padding: 100, border: '1px solid grey' }}> 百度地图 </p>
        <p> <Link to={`/`}>首页</Link> </p>
      </header>
      <Table columns={columns} dataSource={addresslist} />
    </div>
  );
}

export default Main;
