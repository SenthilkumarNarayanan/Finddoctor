import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Myprofile from './pages/Myprofile'
import Myappointments from './pages/Myappointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppContextProvider from './context/AppContext'

const App = () => {
  return (
    <AppContextProvider>    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/myprofile' element={<Myprofile/>}/>
        <Route path='/myappointments' element={<Myappointments/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
      </Routes>
      <Footer/>
    </div>
    </AppContextProvider>

  )
}

export default App
