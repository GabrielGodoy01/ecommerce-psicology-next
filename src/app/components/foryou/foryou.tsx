import Image from 'next/image'
import cabeca from './assets/cabeca.png'
import pencil from './assets/pencil.png'
import butterfly from './assets/butterfly.png'

export function ForYou() {
    return (
        <div className="items-stretch max-w-screen-2xl h-full box-border mx-6">
            <h1 className="font-bold lg:text-4xl xl:text-5xl text-3xl md:text-3xlfont-bold tracking-wide">É para você?</h1>
            <h1 className="font-bold lg:text-4xl xl:text-5xl text-3xl md:text-3xl pt-4 text-azulescuro">Para quem é o ebook?</h1>
            <div className="flex flex-col lg:flex-row justify-between mt-20 h-96">
                <div className="flex-1 flex flex-col items-center justify-center relative bg-azulescuro rounded-2xl ">
                    <div className="w-28 h-28 bg-white rounded-full absolute top-0 left-20 -translate-y-1/2 flex items-center justify-center">
                        <Image className="max-w-20 max-h-20 w-full h-full object-contain"
                            src={cabeca}
                            alt="Imagem de cabeça destrancando"
                        />
                    </div>
                    <p className="text-base mt-2 mx-4 text-center text-white">Para aqueles que desejam desvendar as <b>complexidades</b> de seus <b>pensamentos</b>, descobrindo terapias que se alinham à sua mente única.</p>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center relative bg-azulescuro rounded-2xl mx-6">
                    <div className="w-28 h-28 bg-white rounded-full absolute top-0 left-20 -translate-y-1/2 flex items-center justify-center">
                        <Image className="max-w-20 max-h-20 w-full h-full object-contain"
                            src={pencil}
                            alt="Imagem de um lápis"
                            />
                    </div>
                    <p className="text-base mt-2 mx-4 text-center text-white">Explore terapias que destravam seu crescimento, mesmo se você já estiver em uma jornada terapêutica, <b>buscando resultados</b> mais impactantes.</p>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center relative bg-azulescuro rounded-2xl">
                    <div className="w-28 h-28 bg-white rounded-full absolute top-0 left-20 -translate-y-1/2 flex items-center justify-center">
                        <Image className="max-w-20 max-h-20 w-full h-full object-contain"
                            src={butterfly}
                            alt="Imagem borboleta"
                            />
                    </div>
                        <p className="text-base mt-2 mx-4 text-center text-white">Se você está cansado de ficar preso no casulo da ansiedade, este guia é sua libertação. <b>Descubra terapias</b> que o ajudarão a emergir em uma vida plena e vibrante, seja você novo nessa jornada ou buscando uma <b>mudança de trajetória</b>.</p>
                </div>
            </div>
        </div>
    )
}