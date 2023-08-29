
export function Main() {
    return (
        <div className="flex flex-col-reverse items-center max-w-screen-2xl h-full box-border p-6 lg:flex-row">
            <div className="flex-1 flex flex-col justify-center lg:pr-12 pt-2 lg:pt-0">
                <h1 className="font-bold text-center lg:text-left lg:text-4xl xl:text-5xl text-3xl md:text-3xl">Navegando pela Ansiedade: Encontre sua terapia</h1>
                <p className="text-sm md:text-lg text-justify pt-4 pb-4 font-normal">ISSO TEM QUE MUDAR (PROMESSA) Esta procurando uma terapia ou a sua parece não se encaixar? Você não está sozinho. Sua busca pelo equilíbrio emocional é única, e a terapia certa é essencial. Deixe-nos guiar você para uma jornada terapêutica feita para você.</p>
                <button className="bg-azulescuro rounded-xl h-16 w-full cursor-pointer text-xl font-bold text-white hover:shadow-lg">Clique e comece sua jornada!</button>
            </div>
                <iframe className="flex-1 items-center justify-center w-full lg:flex-1 lg:h-3/5" src="https://www.youtube.com/embed/mX_BViO9OV4?si=nHhODwQTDqOkHHc2" title="YouTube video player" allow="accelerometer; autoplay; web-share"></iframe>
        </div>
    )
}