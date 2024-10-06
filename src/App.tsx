import { Route, Routes } from 'react-router-dom';
import { UseMyThemeContext } from './contexts/theme-context';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Suport from './pages/suport';
import Login from './pages/login';
import SignIn from './pages/signIn';



function App() {
  return (
    <div className='h-full bg-white dark:bg-gray-900 text-black dark:text-white' >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/sobre" element={<Sobre />} />
        <Route path="/pages/suport" element={<Suport />} /> 
        <Route path="/pages/login" element={<Login />} /> 
        <Route path="/pages/signIn" element={<SignIn />} /> 
      </Routes>
    </div >
  );
}

export default App;
