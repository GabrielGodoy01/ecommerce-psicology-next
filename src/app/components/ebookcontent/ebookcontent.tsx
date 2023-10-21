import Image from 'next/image'
import placeholder from './assets/placeholder.png'

export function EbookContent() {

    return (
        <div className="flex flex-col lg:flex-row max-w-screen-2xl box-border items-center justify-center mx-6 my-6">
            <div className="flex-1 h-full lg:h-3/4 bg-white rounded-[40px] items-center justify-center">
                <Image className="lg:w-full p-4 lg:p-12 rounded-[40px]" 
                    src={placeholder}
                    alt="Imagem"
                />
            </div>
            <div className="flex-1 h-2/4 lg:h-3/4 flex-col items-center lg:items-start justify-center lg:pl-16">
                <h1 className='font-bold text-center lg:text-left  pt-4 lg:text-4xl xl:text-5xl text-3xl md:text-3xl'>Conteúdo do ebook</h1>
                <h1 className='font-bold text-center lg:text-left lg:text-3xl xl:text-4xl text-3xl md:text-2xl text-azulescuro pt-2' >Tudo o que você vai conhecer</h1>
                <p className='text-sm lg:text-base text-justify pt-4 lg:pt-4'>Explore &quot;Navegando pela Ansiedade: Encontre sua Terapia&quot; e desvende os segredos para superar a ansiedade. Este ebook condensa sabedoria prática em terapias de ansiedade, proporcionando insights valiosos para uma jornada de cura personalizada. O conteúdo inclui:</p>
                <ul className="text-sm pl-6 py-4 lg:text-base list-disc xl:pl-9 xl:py-6">
                    <li>Mais de 50 páginas de conteúdo rico e prático.</li>
                    <li>Guias personalizados para encontrar a terapia perfeita para você.</li>
                    <li>Exploração profunda das diferentes abordagens para tratar a ansiedade</li>
                    <li>Quizzes especializados para orientar sua escolha terapêutica.</li>
                    <li>Ferramentas práticas para aplicar no seu dia a dia.</li>
                </ul>
                <a href="https://google.com" target="_blank">
                    <button className="bg-azulescuro rounded-xl h-16 w-full cursor-pointer text-xl font-bold text-white hover:shadow-lg">Baixe o Ebook</button>
                </a>
            </div>
        </div>
    )
}