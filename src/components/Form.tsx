export default function Form() {

    return (
        <form action="/submit" className="items-center w-52 flex flex-col py-[20px] px-[40px] border rounded-xl gap-4">
            <label htmlFor="inEmail">E-mail</label>
            <input id="inEmail" type="email" className="border" />

            <label htmlFor="inSenha">Senha</label>
            <input id="inSenha" type="password" className="border" />

            <button type="submit" className="border">Sign In</button>
        </form>


    )
}
