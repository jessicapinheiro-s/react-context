import React, { useState } from "react";
import { UseMyThemeContext } from "../contexts/theme-context"
import { Link } from "react-router-dom";
import '../main.css'
import { Moon, SunMoon } from "lucide-react";
import { motion } from "framer-motion";
import ThemeIcon from "./theme-Icon";

export default function Header() {

    return (
        <header className="flex flex-row items-center justify-between py-[25px] px-[160px]  border-b" >
            <h1>LOGO EMPRESA</h1>
            <nav className="w-4/12">
                <ul className="flex list-none flex-row items-center justify-between">
                    <li><Link to="/"> Home</Link></li>
                    <li> <Link to="/pages/sobre">Sobre</Link></li>
                    <li><Link to="/pages/suport">Suport</Link></li>
                    <li><Link to="/pages/login">Login</Link></li>
                    <li><Link to="/pages/signIn">Sign In</Link></li>
                </ul>
            </nav>
            <ThemeIcon/>
        </header>
    )
}

function setKey(arg0: (prevKey: any) => any) {
    throw new Error("Function not implemented.");
}
