interface ContainerImgProps {
    imgCaminho: string;
    TextButton: string;
    Title: string;
}

export function ContainerImg(props: ContainerImgProps) {
    const { imgCaminho, TextButton, Title } = props;

    return (
        <div className="grid grid-cols-2 grid-rows-1 max-w-full h-screen m-10">
            <div className="flex flex-col items-center justify-center gap-6 border h-full rounded-xl">
                <h2 className="text-4xl text-center">{Title}</h2>
                <button className="py-2 px-4 bg-purple-500 rounded-xl w-1/2 text-white">{TextButton}</button>
            </div>
            <div className="flex items-center justify-center border h-full rounded-xl">
                <img src={imgCaminho} alt="img" className="w-1/2 rounded-xl" />
            </div>
            <div className="col-span-2 border text-center rounded-xl grid-cols-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptas. Asperiores similique ducimus minus eligendi! Velit rem, hic natus aperiam nobis voluptas iure. Impedit quae dicta odit, suscipit omnis assumenda.</p>
            </div>
        </div>
    );
}
