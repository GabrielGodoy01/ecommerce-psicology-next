import Image from 'next/image'
import vini from './assets/vini.png'

export function Profissional() {
    return (
        <div className="md:flex md:flex-row max-w-screen-2xl box-border items-center justify-center mx-6 pt-10 lg:py-0">
            <div className="flex-1 flex flex-col items-start justify-center">
                <h1 className="font-bold lg:text-4xl xl:text-5xl text-3xl md:text-3xl">Recomendado por profissionais</h1>
                <h2 className="font-bold lg:text-4xl xl:text-5xl text-3xl md:text-3xl text-azulescuro pt-2 md:pt-4">Psicólogo Vinícius Sing</h2>
                <p className="text-base text-justify py-2 lg:py-9">Psicólogo com experiencia em tal coisa e não sei o que. Citação dele sobre o livro: “Citação dele sobre o livroCitação dele sobre o livroCitação dele sobre o livroCitação dele sobre o livroCitação dele sobre o livroCitação dele sobre o livroCitação dele sobre o livroCitação dele sobre o livroCitação dele sobre o livro”</p>
                <button className="bg-azulescuro rounded-xl h-16 w-full cursor-pointer text-xl font-bold text-white">Entre em contato</button>
            </div>
            <div className="flex flex-1 rounded-[40px] justify-center items-end">  
                <Image className="md:h-full md:w-full md:pl-12"
                            src={vini}
                            alt="Imagem de profissional"
                            height={500}
                            />
            </div>
        </div>
    )
}