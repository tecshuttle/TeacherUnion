import { useState, useEffect } from 'react';
import 'antd/dist/reset.css'
import { Button, Table, Space, Tag } from 'antd'
import request from '../Utils/request';
import { useNavigate, Link } from 'react-router-dom';

function Main() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{height: 250,padding: 100, border: '1px solid grey'}}> 百度地图 </p>
        <p>
          <Space size="middle">
            <Link to={`/address`}>站点管理</Link>
          </Space>
          <Space size="middle">&nbsp;&nbsp;&nbsp;</Space>
          <Space size="middle">
            <Link to={`/girl`}>妹子管理</Link>
          </Space>
        </p>
      </header>
    </div>
  );
}

export default Main;
