import Image from 'next/image'
import capa from './assets/capa-ebook.png'

export function EbookContent() {

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-screen-2xl mx-auto p-8 bg-gray-50 space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
                <Image 
                    className="rounded-lg shadow-2xl" 
                    src={capa}
                    alt="Imagem do Ebook"
                />
            </div>
            <div className="flex-1 flex flex-col items-center lg:items-start justify-center space-y-6">
                <h1 className='font-bold text-center lg:text-left text-3xl md:text-4xl lg:text-5xl text-gray-800'>
                    Conteúdo do eBook
                </h1>
                <h2 className='font-bold text-azulescuro text-center lg:text-left text-xl md:text-2xl lg:text-3xl text-blue-700'>
                    Tudo o que você vai conhecer
                </h2>
                <p className="text-lg text-gray-700 text-justify">
                    Explore &quot;Navegando pela Ansiedade: Encontre sua Terapia&quot; e desvende os segredos para superar a ansiedade. Este ebook condensa sabedoria prática em terapias de ansiedade, proporcionando insights valiosos para uma jornada de cura personalizada. O conteúdo inclui:
                </p>
                <ul className="text-lg text-gray-700 list-disc pl-6 space-y-2">
                    <li>Mais de 50 páginas de conteúdo rico e prático.</li>
                    <li>Guias personalizados para encontrar a terapia perfeita para você.</li>
                    <li>Exploração profunda das diferentes abordagens para tratar a ansiedade.</li>
                    <li>Quizzes especializados para orientar sua escolha terapêutica.</li>
                    <li>Ferramentas práticas para aplicar no seu dia a dia.</li>
                </ul>
                <a href="https://google.com" target="_blank" className="w-full">
                    <button className="bg-azulescuro rounded-xl h-16 w-full cursor-pointer text-xl font-bold text-white hover:shadow-lg">
                        Baixe o eBook
                    </button>
                </a>
            </div>
        </div>
    )
}
