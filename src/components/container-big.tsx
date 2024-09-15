interface ContainerBigProps {
    Title: string;
    Description: string;
}

export function ContainerBig (props: ContainerBigProps) {
    const {Title, Description} = props;
    return(
        <div className="block py-[25px] px-[50px]">
            <h1 className="text-base text-4xl text-center">{Title}</h1>
            <p className="text-base text-left">{Description}</p>
        </div>
    )
}