interface ContainerBigProps {
    Title: string;
    Description: string;
    TextButton: string;
    SubTitle: string;
}

export function ContainerBigDuplo(props: ContainerBigProps) {
    const { Title, Description,TextButton, SubTitle } = props;
    return (
        <div className="flex py-[15px] items-start justify-between px-[50px] gap-6 h-1/4">
            <div className="flex flex-col items-center gap-6 w-1/2 border py-[10px] px-[0px] h-full">
                <h1 className="text-base text-5x1 text-center">{Title}</h1>
                <p className="text-base text-left leading-normal">{Description}</p>
            </div>
            <div className="flex flex-col items-center gap-6 w-1/2 border py-[10px] px-[0px] h-full">
                <h2 className="text-base text-4xl text-center"> {SubTitle}</h2>
                <button className="py-[10px] px-[20px] bg-red-500 rounded-xl w-1/2">{TextButton}</button>
            </div>
        </div>
    )
}