import { UseMyThemeContext } from "../contexts/theme-context";

interface ContainerBigProps {
    Title: string;
    Description: string;
    TextButton: string;
    SubTitle: string;
}
const themeStyles = {
    Light: { background: '#fff', color: '#000'},
    Dark: { 
        background: '#313131', 
        color: '#e5e5e5', 
        border: 'none'
    },
  };


export function ContainerBigDuplo(props: ContainerBigProps) {
    const { Title, Description, TextButton, SubTitle } = props;
    const { valueTheme } = UseMyThemeContext();
    return (
        <div className="flex  justify-between mx-40 mb-2.5 gap-6 h-1/4 h-100" >
            <div className="flex flex-col items-start gap-6 w-1/2  rounded-xl py-[20px] min-h-full" style={themeStyles[valueTheme]}>
                <h2 className="text-4xl">{Title}</h2>
                <p className="text-base text-left leading-normal">{Description}</p>
            </div>
            <div className="flex flex-col items-end gap-6 w-1/2  rounded-xl py-[20px] min-h-full" style={themeStyles[valueTheme]}>
                <h2 className=" text-3xl "> {SubTitle}</h2>
                <button className="py-[10px] px-[20px] bg-red-500 rounded-xl w-1/2">{TextButton}</button>
            </div>
        </div>
    )
}