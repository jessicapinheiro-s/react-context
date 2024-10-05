import { LockKeyhole, Mail } from "lucide-react";

export default function Form() {

    return (
        <form action="/submit" className="items-center w-96 flex flex-col py-[20px] px-[40px] border rounded-xl gap-4">
            <label htmlFor="inEmail" className="text-sm text-left block w-full font-semibold">E-mail</label>
            <div className="flex items-center w-full">
                <div className="items-center flex flex-col  h-10 justify-center w-10">
                    <Mail />
                </div>
                <input id="inEmail" type="email" className="border-b-2 h-10  w-full focus:border-blue-500 focus:outline-none" placeholder="E-mail" />
            </div>

            <label htmlFor="inSenha " className="text-sm text-left w-full block font-semibold">Senha</label>
            <div className="flex items-center w-full">
                <div className="items-center flex flex-col  h-10 justify-center w-10">
                    <LockKeyhole />
                </div>
                <input id="inSenha" type="password" className="border-b-2 h-10 w-full focus:border-blue-500 focus:outline-none" placeholder="Senha" />
            </div>

            <button type="submit" className="border bg-blue-500 py-[15px] px-[40px] w-1/2 rounded-xl text-white">Sign In</button>
        </form>


    )
}
