import Header from "../components/header";
import { ProviderThemeContext } from "../contexts/theme-context";

export default function Suport() {
    return (
        <ProviderThemeContext>
            <Header/>
            <h1>Suport</h1>
        </ProviderThemeContext>
    )
}