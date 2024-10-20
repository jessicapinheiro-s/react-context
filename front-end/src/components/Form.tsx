import { LockKeyhole, Mail } from "lucide-react";
import React from "react";

interface PropsForm {
    Type: string;
    Title: string;

}

export default function Form({ Type, Title }: PropsForm) {

    return (
        <form action="/submit" className="items-center w-96 flex flex-col py-[20px] px-[40px] border rounded-xl gap-4  border-border-light dark:border-border-dark bg-back-light dark:bg-components-dark">
            <div className="text-center w-full">
                <h1 className="text-3xl">{Title}</h1>
            </div>
            <label htmlFor="inEmail" className="text-sm text-left block w-full font-semibold">E-mail</label>
            <div className="flex items-center w-full">
                <div className="items-center flex flex-col  h-10 justify-center w-10">
                    <Mail />
                </div>
                <input id="inEmail" type="email" className="border-b-2 h-10  w-full focus:border-blue-500 focus:outline-none  bg-back-light dark:bg-components-dark text-color-light dark:text-color-dark" placeholder="E-mail" />
            </div>

            <label htmlFor="inSenha " className="text-sm text-left w-full block font-semibold">Senha</label>
            <div className="flex items-center w-full">
                <div className="items-center flex flex-col  h-10 justify-center w-10">
                    <LockKeyhole />
                </div>
                <input id="inSenha" type="password" className="border-b-2 h-10 w-full focus:border-blue-500 focus:outline-none   bg-back-light dark:bg-components-dark text-color-light dark:text-color-dark" placeholder="Senha" />
            </div>

            <button type="submit" className=" bg-back-button-padrao py-[15px] px-[40px] w-1/2 rounded-xl text-white border-0 hover:bg-back-button-padrao-hover">{Title}</button>
        </form>


    )
}
