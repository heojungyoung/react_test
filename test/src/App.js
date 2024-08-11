import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider} = Layout;

const item1 = ['1','2','3'].map((key) => ({
  key, 
  label: `nav ${key}`,
}));

import logo from './logo.svg';
import './App.css';







function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         

         
         test Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
