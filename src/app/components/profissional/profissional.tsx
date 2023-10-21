import Image from 'next/image'
import vini from './assets/vini.png'

export function Profissional() {
    return (
        <div className="md:flex md:flex-row max-w-screen-2xl box-border items-center justify-center mx-6 pt-10 lg:py-0">
            <div className="flex-1 flex flex-col items-start justify-center">
                <h1 className="w-full font-bold text-center md:text-left lg:text-4xl xl:text-5xl text-3xl md:text-3xl">Recomendado por profissionais</h1>
                <h2 className="w-full font-bold text-center md:text-left lg:text-4xl xl:text-5xl text-3xl md:text-3xl text-azulescuro pt-2 md:pt-4">Psicólogo Vinícius Sing</h2>
                <p className="text-base text-justify py-4 lg:py-9">Psicólogo com experiencia em tal coisa e não sei o que. Citação dele sobre o livro: “Citação dele sobre o livroCitação dele sobre o livroCitação dele sobre o livroCitação dele sobre o livroCitação dele sobre o livroCitação dele sobre o livroCitação dele sobre o livroCitação dele sobre o livroCitação dele sobre o livro”</p>
                <a href="https://chat.whatsapp.com/CnaNlAjYWbl6fUyt5lARdr" target="_blank" className="bg-azulescuro rounded-xl h-16 w-full cursor-pointer text-xl font-bold text-white hover:shadow-lg">
                    <button className="bg-azulescuro rounded-xl h-16 w-full cursor-pointer text-xl font-bold text-white hover:shadow-lg">Entre em contato</button>
                </a>
            </div>
            <div className="flex flex-1 rounded-[40px] justify-center items-end md:h-full md:w-full md:pl-12">  
                <Image
                            src={vini}
                            alt="Imagem de profissional"
                            style={{ height: '80vh'}}
                            />
            </div>
        </div>
    )
}