import React from 'react';


import './App.scss';
import 'swiper/css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Footer from './component/footer/Footer';
import About from './pages/About';
import Header from './component/header/Header';
import Login from './component/userAccess/userLogin/Login';
import Billboard from './pages/Billboard';
import DescriptionMovie from './pages/descriptionMovie/DescriptionMovie';
import Register from './component/userAccess/userRegistration/Register';
import MenuTabs from './component/menuTabs/MenuTabs';



const App = () => {
  return (
    <BrowserRouter>
      <Header />


      <Routes>
        <Route path='/' index element={<Home />} />


        <Route path='/:category' element={<Billboard />} />
        <Route path='/:category/:id' element={<DescriptionMovie />} />
        <Route path='/campra' element={<MenuTabs />} />


        <Route path='/About' element={<About />} />


        <Route path='/Login' element={<Login />} />
        <Route path='/Registration' element={<Register />} />
      </Routes> 

      
      <Footer />
 
    </BrowserRouter>

  )
}

export default App