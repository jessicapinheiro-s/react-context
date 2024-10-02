import { ReactNode } from "react";
import { UseMyThemeContext } from "../contexts/theme-context";

interface CardIcon {
    Title: string;
    Description: string;
    Icon: ReactNode;
}
const themeStyles = {
    Light: { background: '#fff', color: '#000'},
    Dark: { background: '#2d2d2d', color: '#e5e5e5', border: 'none'},
  };


export function CardIcon (props: CardIcon) {
    const { valueTheme } = UseMyThemeContext();
    const {Icon, Title, Description} = props;
    return(
        <div className=" items-center w-52 flex flex-col py-[20px] px-[40px] border rounded-xl" style={themeStyles[valueTheme]}>
            {Icon}
            <h2 className="text-base text-2xl text-center">{Title}</h2>
            <p className="text-base text-left">{Description}</p>
        </div>
    )
}


