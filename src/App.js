import React from 'react';
import routers from './router/routers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/pages/comm.css'

function App() {
  return (
    <>
    <BrowserRouter basename="zhangguixia.github.io">   
          <Routes>
          {
             routers.map((item,index)=> <Route key={index} path={item.path} element={<item.component/>}/>)   ////如果使用 BrowserRouter，需要添加 basename
          }
          </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
