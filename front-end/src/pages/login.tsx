import Form from "../components/Form";
import ThemeIcon from "../components/Theme-Icon";

export default function Login() {
    return (
        <div className="items-center flex flex-col justify-center h-screen">
            <Form Type="LogIn" Title="LogIn"/>
            <div className="absolute w-6 h-6 flex items-center justify-center py-[10px] px-[10px] border rounded-full bottom-4 right-4 ">
                <div className="flex items-center justify-center">
                    <ThemeIcon />
                </div>
            </div>
        </div>


    )
}
