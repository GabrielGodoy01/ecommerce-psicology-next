import Image, { StaticImageData } from 'next/image'
import cabeca from './assets/cabeca.png'
import pencil from './assets/pencil.png'
import butterfly from './assets/butterfly.png'

function Feature({ icon, text } : { icon: StaticImageData, text: string }) {
    return (
        <div className="flex items-center justify-center relative bg-azulescuro rounded-2xl py-8 md:py-20 px-2">
            <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-24 lg:h-24 bg-white rounded-full absolute top-0 left-20 -translate-y-1/2 flex items-center justify-center">
                <Image className="p-4 w-full h-full object-contain"
                    src={icon}
                    alt="Ícone"
                />
            </div>
            <p className="text-sm md:text-lg lg:text-base mt-2 mx-4 text-center text-white">{text}</p>
        </div>
    );
}

export function ForYou() {
    return (
        <div className="flex flex-col items-center justify-center max-w-screen-2xl h-full box-border py-10 lg:py-0 mx-4">
            <h1 className="font-normal lg:text-3xl xl:text-4xl text-xl md:text-2xl">Para quem é o ebook</h1>
            <h1 className="font-bold lg:text-4xl xl:text-5xl text-2xl md:text-3xl text-azulescuro">Navegando pela Ansiedade<span className="text-black font-normal">?</span></h1>
            <div className="grid grid-cols-1 md:auto-cols-auto lg:grid-cols-3 gap-10 pt-10 lg:mt-20">
                <Feature
                    icon={cabeca}
                    text="Para aqueles que desejam desvendar as complexidades de seus pensamentos, descobrindo terapias que se alinham à sua mente única."
                />
                <Feature
                    icon={pencil}
                    text="Explore terapias que destravam seu crescimento, mesmo se você já estiver em uma jornada terapêutica, buscando resultados mais impactantes."
                />
                <Feature
                    icon={butterfly}
                    text="Se você está cansado de ficar preso no casulo da ansiedade, este guia é sua libertação. Descubra terapias que o ajudarão a emergir em uma vida plena e vibrante, seja você novo nessa jornada ou buscando uma mudança de trajetória."
                />
            </div>
        </div>
    )
}