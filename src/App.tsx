import React from 'react';
import { UseMyThemeContext } from './contexts/theme-context';
import Header from './components/header';
const themeStyles = {
  Light: { background: '#fff', color: '#000', padding: 0, margin: 0 },
  Dark: { background: '#262626', color: '#fff', padding: 0, margin: 0 },
};
function App() {
  const { valueTheme } = UseMyThemeContext();

  return (
    <div style={themeStyles[valueTheme]}>
      <Header />
      <main>
        <section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam minima consequuntur consectetur iure aliquam cupiditate aut maiores obcaecati rem voluptatibus expedita animi, beatae cum maxime non est, at illum?
        </section>
        <section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam minima consequuntur consectetur iure aliquam cupiditate aut maiores obcaecati rem voluptatibus expedita animi, beatae cum maxime non est, at illum?
        </section>
        <aside>
          jfoawfáe fawefnaióewfae fakfewifwefefee fefjefe fef e fe fjenfowefw few fwfef efe efeofihÉ Feknifwe fewfiwehihtl ~l dams,mf f4f4f4f 4 
        </aside>
      </main>
      <h1>App</h1>
    </div>
  );
}

export default App;
