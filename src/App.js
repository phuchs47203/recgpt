import React from 'react';
// import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { Footer, Possibility, Feature, Header, WhatGPT3, Blog } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <WhatGPT3 />
      <Brand />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App





    // <BrowserRouter>
    //   <div className='gradient__bg'>
    //     <Navbar />
    //   </div>
    //   <Routes>
    //     <Route path="/" exact element={<Header />} />
    //   </Routes>
    //   <Routes>
    //     <Route path="/" exact element={<CTA />} />
    //   </Routes>
    //   <Routes>
    //     <Route path="/" exact element={<Feature />} />
    //   </Routes>
    //   <Routes>
    //     <Route path="/" exact element={<Footer />} />
    //   </Routes>

    //   <Routes>
    //     <Route path="/wgpt3" exact element={<WhatGPT3 />} />
    //     <Route path="/possibility" exact element={<Possibility />} />
    //     <Route path="/blog" exact element={<Blog />} />
    //   </Routes>
    // </BrowserRouter>

