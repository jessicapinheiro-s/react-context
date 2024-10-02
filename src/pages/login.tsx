import { UseMyThemeContext } from "../contexts/theme-context"

export default function Login() {
    const themeStyles = {
        Light: { background: '#fff', color: '#000' },
        Dark: { background: '#313131', color: '#e5e5e5', border: 'none' },
    };
    const { valueTheme } = UseMyThemeContext();
    return (
        <form action="">
            <input type="email"  className="border"/>
            <input type="password" className="border" />
            <button type="submit" className="border">Login</button>
        </form>

    )
}
