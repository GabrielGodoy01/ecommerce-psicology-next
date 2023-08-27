import Image from 'next/image'
import vini from './assets/vini.png'

export function Profissional() {
    return (
        <div className="flex flex-row max-w-screen-2xl w-full box-border items-center justify-center mx-6">
            <div className="flex-1 flex flex-col items-start justify-center">
                <h1 className="font-bold text-5xl">Recomendado por profissionais</h1>
                <h2 className="font-bold text-4xl text-azulescuro pt-2">Dr. Vinícius Sing</h2>
                <p className="text-base text-justify py-9">Psicologo com experiencia em tal coisa e não sei o que. Citação dele sobre o livro: “”</p>
                <button className="bg-azulescuro rounded-xl h-16 w-full cursor-pointer text-xl font-bold text-white">Entre em contato</button>
            </div>
            <div className="flex flex-1 rounded-[40px] items-end">  
                <Image className="h-full w-full px-12"
                            src={vini}
                            alt="Imagem de cabeça destrancando"
                            />
            </div>
        </div>
    )
}