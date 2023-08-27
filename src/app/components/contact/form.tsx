import styles from "./contact.module.css";

export async function Form() {
    return (
        <form className="flex flex-row items-center justify-between">
            <div className="flex-1 flex flex-col">
                <label className="font-bold text-2xl pb-1">Seu Nome</label>
                <input className="h-12 rounded-xl" type="text" name="thing" required />
            </div>
            <div className="flex-1 flex flex-col px-16">
                <label className="font-bold text-2xl pb-1">Email</label>
                <input className="h-12 rounded-xl" type="text" name="thing" required />
            </div>
            <div className="flex-1 flex flex-col">
                <label className="text-azulclaro font-bold text-2xl pb-1">Email</label>
                <button className="bg-azulescuro rounded-xl h-12 w-full cursor-pointer text-xl font-bold text-white">Enviar</button>
            </div>
        </form>
    )
}