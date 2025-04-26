import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Loader finished, switching to Home");
      setLoading(false);
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/services' element={<Services />} ></Route>
            <Route path='/aboutUs' element={<About />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/ContactUs' element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  )
}