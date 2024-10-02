
interface ContainerBigProps {
    Title: string;
    Description: string;
}

export function ContainerBig (props: ContainerBigProps) {
    const {Title, Description} = props;
    return(
        <div className="flex flex-col mx-40 mb-2.5 gap-6 py-[25px]">
            <h1 className="text-2xl text-center">{Title}</h1>
            <p className="text-base text-center leading-normal">{Description}</p>
        </div>
    )
}

