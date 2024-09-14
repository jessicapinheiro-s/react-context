import React from "react";
import { UseMyThemeContext } from "../contexts/theme-context"
import { Link } from "react-router-dom";

export default function Header (){
    const {setThemeValue} = UseMyThemeContext();
    return(
        <header>
            <h1>LOGO EMPRESA</h1>
            <nav>
                <ul>
                    <li><Link to="/"> Home</Link></li>
                    <li> <Link to="/pages/sobre">Sobre</Link></li>
                    <li><Link to="/">Suport</Link></li>
                </ul>
            </nav>
            <button onClick={() => {setThemeValue("Light")}}>Light</button>
            <button onClick={() => {setThemeValue("Dark")}}>Dark</button>
        </header>
    )
}