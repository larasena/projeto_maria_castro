import React from 'react';
import PaginaInicial from './pages/index/PaginaInicial';
import Faq from './pages/faq/Faq';
import Blog from './pages/blog/Blog'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

