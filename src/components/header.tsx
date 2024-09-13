import React from 'react';
import { UseMyThemeContext } from '../contexts/theme-context'

export default function Header (){
    const {valueTheme, setThemeValue} = UseMyThemeContext();
    return(
        <header>
            <h1>LOGO EMPRESA</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Suport</li>
                </ul>
            </nav>
            <button onClick={() => {setThemeValue('Light')}}>Light</button>
            <button onClick={() => {setThemeValue('Dark')}}>Dark</button>
        </header>
    )
}