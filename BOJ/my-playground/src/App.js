import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UseRefPlayground from './pages/UseRefPlayground';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/userefplayground' element={<UseRefPlayground />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
