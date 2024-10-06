import { ReactNode } from "react";
import { UseMyThemeContext } from "../contexts/Theme-context";

interface CardIcon {
    Title: string;
    Description: string;
    Icon: ReactNode;
}


export function CardIcon (props: CardIcon) {
    const { valueTheme } = UseMyThemeContext();
    const {Icon, Title, Description} = props;
    return(
        <div className=" items-center w-52 flex flex-col py-[20px] px-[40px] border rounded-xl gap-4  border-border-light dark:border-border-dark  dark:bg-components-dark" >
            {Icon}
            <h2 className="text-2xl text-center">{Title}</h2>
            <p className="text-base text-left">{Description}</p>
        </div>
    )
}


