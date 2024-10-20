import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../main.css'
import { CircleX, Menu } from "lucide-react";
import { motion } from "framer-motion";
import ThemeIcon from "./Theme-Icon";

export default function Header() {
    const styleLiMobile = 'py-[10px] px-[40px] hover:bg-back-button-orange sm:p-0 sm:hover:bg-transparent';
    const styleLiLink = 'w-full block';
    const [classNav, setClassNav] = useState('sm:w-4/12 absolute top-0 bottom-0 right-0 w-8/12 sm:relative sm:bg-transparent bg-components-dark z-10');
    
    function openMenu(event: React.MouseEvent<SVGSVGElement>): void {
        event.stopPropagation();
        setClassNav('sm:w-4/12 absolute top-0 bottom-0 right-0 w-8/12 sm:relative sm:bg-transparent bg-components-dark z-10')
    }

    function closeMenu(event: React.MouseEvent<SVGSVGElement>): void {
        event.stopPropagation();
        setClassNav('sm:w-4/12 absolute top-0 bottom-0 right-0 w-8/12 sm:relative sm:bg-transparent bg-components-dark z-10 hidden')
    }

    return (
        <header className="flex flex-row items-center justify-between sm:py-[25px] sm:px-[80px]  border-b border-border-light dark:border-border-dark bg-back-light dark:bg-components-dark text-color-light dark:text-color-dark py-[25px] px-[80px]" >
            <h1>LOGO EMPRESA</h1>
            <nav className={classNav}>
                <ul className="flex list-none sm:flex-row sm:items-center sm:justify-between flex-col ">
                    <span className='block h-8 py-[20px] px-[40px] sm:hidden'>Olá user</span>
                    <li className={styleLiMobile}><Link className={styleLiLink} to="/"> Home</Link></li>
                    <li className={styleLiMobile}> <Link className={styleLiLink} to="/">Sobre</Link></li>
                    <li className={styleLiMobile}><Link className={styleLiLink} to="/pages/Suport">Suport</Link></li>
                    <li className={styleLiMobile}><Link className={styleLiLink} to="./pages/Login">Login</Link></li>
                    <li className={styleLiMobile}><Link className={styleLiLink} to="/pages/SignIn">Sign In</Link></li>
                    <li className='h-8 py-[10px] px-[40px] sm:hidden'><CircleX onClick={closeMenu} /></li>
                    <li className='h-8 py-[10px] px-[40px] sm:hidden'><ThemeIcon  /></li>
                </ul>
            </nav>
            <ThemeIcon />
            <Menu className=" sm:hidden" onClick={openMenu} />
        </header>
    )
}

function setKey(arg0: (prevKey: any) => any) {
    throw new Error("Function not implemented.");
}
