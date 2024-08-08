import React from 'react';
import routers from './router/routers'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './style/pages/comm.css'

function App() {
  return (
    <>
    <BrowserRouter>
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
