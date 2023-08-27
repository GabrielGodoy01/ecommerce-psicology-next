import Image from 'next/image'
import placeholder from './assets/placeholder.png'

export function EbookContent() {

    return (
        <div className="flex flex-row max-w-screen-2xl h-full w-full box-border items-center justify-center m-6">
            <div className="flex flex-1 h-3/4 bg-azulclaro rounded-[40px] items-center justify-center">
                <Image className="h-full w-full p-12 rounded-[40px]" 
                    src={placeholder}
                    alt="Imagem"
                />
            </div>
            <div className="flex-1 h-3/4 flex flex-col items-start justify-center pl-9 py-9">
                <h1 className='font-bold text-5xl'>Conteúdo do ebook</h1>
                <h1 className='font-bold text-4xl text-azulescuro pt-2' >Tudo o que você vai experimentar</h1>
                <p className='text-base text-justify pt-9'>Our ebook blends cutting-edge research with empathetic insights to present a comprehensive guide to navigating anxiety. The content includes:</p>
                <ul className="text-base list-disc pl-9 py-9">
                    <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                    <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                    <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                    <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                    <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                </ul>
                <button className="bg-azulescuro rounded-xl h-16 w-full cursor-pointer text-xl font-bold text-white">Clique e comece sua jornada!</button>
            </div>
        </div>
    )
}