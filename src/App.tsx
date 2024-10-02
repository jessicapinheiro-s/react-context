import { Route, Routes } from 'react-router-dom';
import { UseMyThemeContext } from './contexts/theme-context';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Suport from './pages/suport';


const themeStyles = {
  Light: { background: '#fff', color: '#000', padding: 0, margin: 0 },
  Dark: { background: '#262626', color: '#e5e5e5', padding: 0, margin: 0},
};

function App() {
  const { valueTheme } = UseMyThemeContext();
  return (
    <div style={themeStyles[valueTheme]} >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/sobre" element={<Sobre />} />
        <Route path="/pages/suport" element={<Suport />} />
      </Routes>
    </div >
  );
}

export default App;
