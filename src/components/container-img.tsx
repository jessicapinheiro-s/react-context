import { UseMyThemeContext } from "../contexts/theme-context";

interface ContainerImgProps {
    imgCaminho: string;
    TextButton: string;
    Title: string;
}
const themeStyles = {
    Light: { background: '#fff', color: '#000'},
    Dark: { 
        color: '#e5e5e5', 
        border: 'none'
    },
  };
export function ContainerImg(props: ContainerImgProps) {
    const { imgCaminho, TextButton, Title } = props;
    const { valueTheme } = UseMyThemeContext();
    return (
        <div className="grid grid-cols-2 grid-rows-1  mx-40 mb-2.5  py-[25px]">
            <div className="flex flex-col items-start justify-center gap-6  h-full rounded-xl" style={themeStyles[valueTheme]}>
                <h2 className="text-4xl ">{Title}</h2>
                <button className="py-2 px-4 bg-purple-500 rounded-xl w-1/2 text-white" >{TextButton}</button>
            </div>
            <div className="flex items-end justify-center  h-full rounded-xl" style={themeStyles[valueTheme]}>
                <img src={imgCaminho} alt="img" className="w-1/2 rounded-xl" />
            </div>
            <div className="col-span-2  text-center rounded-xl grid-cols-2" style={themeStyles[valueTheme]}> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptas. Asperiores similique ducimus minus eligendi! Velit rem, hic natus aperiam nobis voluptas iure. Impedit quae dicta odit, suscipit omnis assumenda.</p>
            </div>
        </div>
    );
}
