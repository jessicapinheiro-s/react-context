import { Route, Routes } from 'react-router-dom';
import { UseMyThemeContext } from './contexts/Theme-context';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Suport from './pages/Suport';
import Login from './pages/Login';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className=' bg-back-light dark:bg-back-dark text-color-light dark:text-color-dark min-h-screen' >
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
