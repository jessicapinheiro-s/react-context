import React from 'react';
import { ProviderThemeContext } from './contexts/theme-context';
import MainContent from './contexts/main-theme-context';


function App() {
  return (
    <div style={{margin: "0px"}}>
      <ProviderThemeContext>
        <MainContent />
      </ProviderThemeContext>
    </div>
  );
}

export default App;
