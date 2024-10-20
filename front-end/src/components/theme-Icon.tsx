import { motion } from "framer-motion";
import { useState } from "react";
import { UseMyThemeContext } from "../contexts/Theme-context";
import { Moon, SunMoon } from "lucide-react";
import React from "react";

export default function ThemeIcon() {
    const [key, setKey] = useState(0);
    const { setThemeValue, valueTheme } = UseMyThemeContext();

    function handleTheme() {
        setKey(prevKey => prevKey + 1);
        valueTheme === "Light" ? setThemeValue("Dark") : setThemeValue("Light");

        if(valueTheme === 'Dark'){
            window.document.getElementById("root")?.classList.toggle( 'dark' );
        }else{
            window.document.getElementById("root")?.classList.toggle( 'light');
        }
    }
    localStorage.setItem("Theme", valueTheme);
    return (
        <motion.div
            key={key}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: 0, ease: "linear" }}
            style={{ display: "inline-block" }}
        >
            {
                valueTheme === "Dark" ? <Moon onClick={handleTheme} /> : <SunMoon onClick={handleTheme} />
            }
        </motion.div>
    )
}