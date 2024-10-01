interface ContainerBigProps {
    Title: string;
    Description: string;
}

export function ContainerBig (props: ContainerBigProps) {
    const {Title, Description} = props;
    return(
        <div className="flex flex-col m-10 gap-6">
            <h1 className="text-base text-5x1 text-center">{Title}</h1>
            <p className="text-base text-center leading-normal">{Description}</p>
        </div>
    )
}