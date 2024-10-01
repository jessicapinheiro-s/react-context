import React from 'react';
import { UseMyThemeContext } from './contexts/theme-context';
import Header from './components/header';
import { ContainerBig } from './components/container-big';
import { LockKeyhole, BugOff, Check, ChartColumnIncreasing } from 'lucide-react';
import { CardIcon } from './components/card-icon';
import Home from './pages/home';


const themeStyles = {
  Light: { background: '#fff', color: '#000', padding: 0, margin: 0 },
  Dark: { background: '#262626', color: '#e5e5e5', padding: 0, margin: 0 },
};

function App() {
  const { valueTheme } = UseMyThemeContext();
  return (
    <div style={themeStyles[valueTheme]} >
      <Home />
    </div >
  );
}

export default App;
