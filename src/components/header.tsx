import React from "react";
import { UseMyThemeContext } from "../contexts/theme-context"
import { Link } from "react-router-dom";
import '../main.css'

export default function Header() {
    const { setThemeValue } = UseMyThemeContext();
    const themeStyles = {
        Light: { background: '#fff', color: '#000' },
        Dark: { background: '#313131', color: '#e5e5e5', border: 'none' },
    };
    const { valueTheme } = UseMyThemeContext();
    return (
        <header className="flex flex-row items-center justify-between py-[25px] px-[160px] bg-gray-20 border-b" style={themeStyles[valueTheme]}>
            <h1>LOGO EMPRESA</h1>
            <nav className="w-4/12">
                <ul className="flex list-none flex flex-row items-center justify-between">
                    <li><Link to="/"> Home</Link></li>
                    <li> <Link to="/pages/sobre">Sobre</Link></li>
                    <li><Link to="/pages/suport">Suport</Link></li>
                    <li><Link to="/pages/login">Login</Link></li> 
                    <li><Link to="/pages/signIn">Sign In</Link></li> 
                </ul>
            </nav>
            <button className="py-[10px] px-[15px] bg-red-300 rounded-xl" onClick={() => { setThemeValue("Light") }}>Light</button>
            <button className="py-[10px] px-[15px] bg-blue-300 rounded-xl" onClick={() => { setThemeValue("Dark") }}>Dark</button>
        </header>
    )
}