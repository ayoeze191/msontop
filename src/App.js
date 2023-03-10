import React from 'react'
import Navigation from './components/Navigations';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Qui from './pages/Qui';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat';
import { useAuthContext } from './context/auth/auth';



const App = () => {
  const {isAuth} = useAuthContext()
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/qui' element={<Qui/>}>Qui Sommes Nous?</Route>
        <Route path='/faq' element={<Faq/>}>FAQ</Route>
        <Route path='/contact' element={<Contact/>}>Contact</Route>
        <Route path='/login' element={<Login/>}>Login</Route>
        <Route path='/signup' element={<Signup/>}>Signup</Route>
        <Route path='/chat' element={<Chat/>}>Chat</Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
