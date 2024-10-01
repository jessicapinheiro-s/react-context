import { ReactNode } from "react";

interface CardIcon {
    Title: string;
    Description: string;
    Icon: ReactNode;
}

export function CardIcon (props: CardIcon) {
    const {Icon, Title, Description} = props;
    return(
        <div className=" items-center w-52 flex flex-col py-[20px] px-[40px] border rounded-xl">
            {Icon}
            <h2 className="text-base text-2xl text-center">{Title}</h2>
            <p className="text-base text-left">{Description}</p>
        </div>
    )
}