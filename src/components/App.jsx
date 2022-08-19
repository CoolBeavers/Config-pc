import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import ConfigurationPage from './configuration_page/ConfigurationPage'
import Login from './auth/Login'
import Registration from './auth/Registration'
import Navbar from './navbar/Navbar'
import Title from './main/Title'
import About from './about/About'
import Support from './support/Support'
import ProductList from './list/ProductList'

const App = () => {
  const path = useLocation().pathname;
  const isAuth = path === '/login' || path === '/registration';

  return (
    <div className={isAuth ? 'bg-[#1C1C1C] px-[150px] text-[#BABABA]' : 'bg-[#1C1C1C] px-[150px] text-[#BABABA] min-h-screen'}>
      {isAuth ? undefined : <Navbar/>}
      <Routes>
        <Route path="/" element={<Title/>}/>
        <Route path="/config" element={<ConfigurationPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/list" element={<ProductList/>}/>
      </Routes>
    </div>
  )
}

export default App