import React from 'react';
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Layout from './layout/index'
import Home from './pages/home'
import Goods from './pages/goods'
import Chat from './pages/chat'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="goods" element={<Goods />} />
          <Route path="chat" element={<Chat />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
