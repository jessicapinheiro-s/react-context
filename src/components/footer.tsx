import { UseMyThemeContext } from "../contexts/theme-context"
import { Link } from "react-router-dom";
import '../main.css'

export default function Footer() {
    const themeStyles = {
        Light: { background: '#fff', color: '#000' },
        Dark: { background: '#313131', color: '#e5e5e5', border: 'none' },
    };
    const { valueTheme } = UseMyThemeContext();
    return (
        <footer className="flex flex-row items-center justify-between py-[25px] px-[160px] bg-bg-footer" style={themeStyles[valueTheme]}>
            <h1 className="text-lg font-bold">LOGO EMPRESA</h1>
            <nav className="w-4/12">
                <ul className="list-none flex flex-col items-center space-y-2">
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li><Link to="/pages/sobre" className="hover:underline">Sobre</Link></li>
                    <li><Link to="/pages/suport" className="hover:underline">Suporte</Link></li>
                </ul>
            </nav>
        </footer>

    )
}
