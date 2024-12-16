import React from 'react';
import routers from './router/routers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/pages/comm.css'

function App() {
  const basename = process.env.NODE_ENV === 'production' ? 'zhangguixia.github.io' : '';
  
  return (
    <>
    <BrowserRouter basename={basename}>
          <Routes>
          {
             routers.map((item,index)=> <Route key={index} path={item.path} element={<item.component/>}/>)
          }
          </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
