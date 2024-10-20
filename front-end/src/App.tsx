import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Suport from './pages/Suport';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import React from 'react';

function App() {
  return (
    <div className=' bg-back-light dark:bg-back-dark text-color-light dark:text-color-dark min-h-screen' >
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Sobre" element={<Sobre />} />
      <Route path="/Suport" element={<Suport />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </div >
  );
}

export default App;