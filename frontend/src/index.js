import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './components/dashboard/Users';
import reportWebVitals from './reportWebVitals';
import DashboardProducts from './components/dashboard/Products';
import Nav from './components/dashboard/Nav';


ReactDOM.render(
  <React.StrictMode>
    <Nav/>
    <Dashboard />
    <DashboardProducts/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
