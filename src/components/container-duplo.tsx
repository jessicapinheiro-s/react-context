import { UseMyThemeContext } from "../contexts/theme-context";

interface ContainerBigProps {
    Title: string;
    Description: string;
    TextButton: string;
    SubTitle: string;
}


export function ContainerBigDuplo(props: ContainerBigProps) {
    const { Title, Description,TextButton, SubTitle } = props;
    return (
        <div className="flex items-start justify-between m-10 gap-6 h-1/4" >
            <div className="flex flex-col items-center gap-6 w-1/2 border  h-full rounded-xl">
                <h2 className="text-base text-4x1 text-center">{Title}</h2>
                <p className="text-base text-left leading-normal">{Description}</p>
            </div>
            <div className="flex flex-col items-center gap-6 w-1/2 border  h-full rounded-xl">
                <h2 className="text-base text-4xl text-center"> {SubTitle}</h2>
                <button className="py-[10px] px-[20px] bg-red-500 rounded-xl w-1/2">{TextButton}</button>
            </div>
        </div>
    )
}