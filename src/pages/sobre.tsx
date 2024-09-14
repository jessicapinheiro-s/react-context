import Header from "../components/header";
import { ProviderThemeContext } from "../contexts/theme-context";

export default function Sobre () {
    return(
        <ProviderThemeContext>
            <Header/>
            <h1>Sobre</h1>
        </ProviderThemeContext>
    )
}