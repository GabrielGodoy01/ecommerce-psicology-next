import styles from "./contact.module.css";

export async function Form() {
    return (
        <form className="md:flex md:flex-row items-center justify-between gap-4">
            <div className="flex flex-1 flex-row items-center justify-between gap-4">
                <div className="flex-1 flex flex-col">
                    <label className="font-bold text-2xl mb-2">Seu Nome</label>
                    <input className="h-12 shadow appearance-none border-2 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="thing" placeholder="Nome" required />
                </div>
                <div className="flex-1 flex flex-col">
                    <label className="font-bold text-2xl mb-2">Email</label>
                    <input className="h-12 shadow appearance-none border-2 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="thing" placeholder="exemplo@exemplo.com" required />
                </div>
            </div>
            <div className="md:w-1/3 flex flex-col">
                <label className="text-azulclaro font-bold md:text-2xl mb-2">Email</label>
                <button className="bg-azulescuro rounded-xl h-12 w-full cursor-pointer text-xl font-bold text-white">Enviar</button>
            </div>
        </form>
    )
}