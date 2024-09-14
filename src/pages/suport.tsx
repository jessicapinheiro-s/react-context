import Header from "../components/header";
import { UseMyThemeContext } from "../contexts/theme-context";


const themeStyles = {
    Light: { background: '#fff', color: '#000', padding: 0, margin: 0 },
    Dark: { background: '#262626', color: '#fff', padding: 0, margin: 0 },
};
export default function Suport() {
    const { valueTheme } = UseMyThemeContext();
    return (
        <div style={themeStyles[valueTheme]}>
            <Header />
            <h1>Suport</h1>
        </div>
    )
}