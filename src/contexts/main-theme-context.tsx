// MainContent.tsx
import React from 'react';
import { UseMyThemeContext } from './theme-context';
import Header from '../components/header'


export default function MainContent() {
  const { valueTheme } = UseMyThemeContext();

  const themeStyles = {
    Light: { background: 'white', color: 'black', padding: 0, margin:0 },
    Dark: { background: 'black', color: 'white', padding: 0, margin:0 }
  };

  return (
    <div style={themeStyles[valueTheme]}>
      <Header />
    </div>
  );
};

