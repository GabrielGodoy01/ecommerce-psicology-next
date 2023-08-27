export function Main() {
    return (
        <div className="flex flex-col items-center max-w-screen-2xl h-full box-border p-6 lg:flex-row">
            <div className="flex-1 flex flex-col justify-center lg:pr-12">
                <h1 className="font-bold lg:text-4xl xl:text-5xl text-3xl md:text-3xl">Navegando pela Ansiedade: Encontre sua terapia</h1>
                <p className="text-sm xl:text-lg text-justify pt-4 pb-4 font-normal">ISSO TEM QUE MUDAR (PROMESSA) Esta procurando uma terapia ou a sua parece não se encaixar? Você não está sozinho. Sua busca pelo equilíbrio emocional é única, e a terapia certa é essencial. Deixe-nos guiar você para uma jornada terapêutica feita para você.</p>
                <button className="bg-azulescuro rounded-xl h-16 w-full cursor-pointer text-xl font-bold text-white">Clique e comece sua jornada!</button>
            </div>
                <iframe className="flex-1 flex items-center justify-center w-full md:w-3/4 lg:h-2/4" src="https://www.youtube.com/embed/mX_BViO9OV4?si=nHhODwQTDqOkHHc2" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}