
interface ContainerImgProps {
    imgCaminho: string;
    TextButton: string;
    Title: string;
}

export function ContainerImg(props: ContainerImgProps) {
    const { imgCaminho, TextButton, Title } = props;
    return (
        <div className="grid grid-cols-2  mx-40 mb-2.5 gap-6 py-[25px] grid-rows-[1fr_60px]">
            <div className="flex flex-col items-start justify-center gap-6 rounded-xl " >
                <h2 className="text-4xl ">{Title}</h2>
                <button className="py-2 px-4 bg-back-button-padrao rounded-xl w-1/2 text-white border-0" >{TextButton}</button>
            </div>
            <div className="flex items-end justify-end   rounded-xl" >
                <img src={imgCaminho} alt="img" className="w-full rounded-xl" />
            </div>
            <div className="col-span-2  text-center rounded-xl" > 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptas. Asperiores similique ducimus minus eligendi! Velit rem, hic natus aperiam nobis voluptas iure. Impedit quae dicta odit, suscipit omnis assumenda.</p>
            </div>
        </div>
    );
}
