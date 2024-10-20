import React from "react";
import { UseMyThemeContext } from "../contexts/Theme-context";

interface ContainerBigProps {
    Title: string;
    Description: string;
    TextButton: string;
    SubTitle: string;
}



export function ContainerBigDuplo(props: ContainerBigProps) {
    const { Title, Description, TextButton, SubTitle } = props;
    return (
        <div className="flex  justify-between sm:mx-40 mx-20 mb-2.5 gap-6 h-1/4 h-100 py-[25px]" >
            <div className="flex flex-col items-start gap-6 w-1/2  rounded-xl  min-h-full py-[20px] px-[40px]" >
                <h2 className="text-4xl">{Title}</h2>
                <p className="text-base text-left leading-normal">{Description}</p>
            </div>
            <div className="flex flex-col items-center gap-6 w-1/2  rounded-xl  min-h-full py-[20px] px-[40px]" >
                <h2 className=" text-3xl "> {SubTitle}</h2>
                <button className="py-[10px] px-[20px] bg-red-500 rounded-xl w-1/2 border-0">{TextButton}</button>
            </div>
        </div>
    )
}