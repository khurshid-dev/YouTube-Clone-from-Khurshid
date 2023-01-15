import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main, Channel, Navbar, VideoDetail, Search } from '../';

const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/channel/:id' element={<Channel />} />
            <Route path='/video/:id' element={<VideoDetail />} />
            <Route path='/search/:id' element={<Search />} />
        </Routes>
    </div>

  )
}

export default App;