import React, { useState } from "react";
import { UseMyThemeContext } from "../contexts/theme-context"
import { Link } from "react-router-dom";
import '../main.css'
import { Moon, SunMoon } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
    const [key, setKey] = useState(0);
    const { setThemeValue, valueTheme } = UseMyThemeContext();

    const themeStyles = {
        Light: { background: '#fff', color: '#000' },
        Dark: { background: '#313131', color: '#e5e5e5', border: 'none' },
    };

    function handleTheme() {
        //window.document.getElementById('root')
        setKey(prevKey => prevKey + 1);
        valueTheme === 'Light' ? setThemeValue("Dark") : setThemeValue("Light")
    }
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
            {
                (
                    <motion.div
                        key={key}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: 0, ease: "linear" }}
                        style={{ display: 'inline-block' }}
                    >
                        {
                            valueTheme === 'Dark' ? <Moon onClick={handleTheme} /> : <SunMoon onClick={handleTheme} />
                        }
                    </motion.div>

                )
            }


        </header>
    )
}

function setKey(arg0: (prevKey: any) => any) {
    throw new Error("Function not implemented.");
}
