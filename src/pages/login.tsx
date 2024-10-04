import Form from "../components/Form";
import { UseMyThemeContext } from "../contexts/theme-context"

export default function Login() {
    const themeStyles = {
        Light: { background: '#fff', color: '#000' },
        Dark: { background: '#313131', color: '#e5e5e5', border: 'none' },
    };
    const { valueTheme } = UseMyThemeContext();
    return (
        <div className="items-center flex flex-col justify-center h-full">
            <Form />
        </div>


    )
}
