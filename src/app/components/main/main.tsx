
export function Main() {
      
    return (
        <div className="flex flex-col-reverse items-center max-w-screen-2xl h-full box-border p-6 lg:flex-row">
            <div className="flex-1 flex flex-col justify-center lg:pr-12 pt-2 lg:pt-0">
                <h1 className="font-bold text-center lg:text-left lg:text-4xl xl:text-5xl text-3xl md:text-3xl">Navegando pela Ansiedade: Encontre sua terapia</h1>
                <p className="text-sm md:text-lg text-justify pt-4 pb-4 font-normal">Prometemos ser seu guia na jornada para entender as nuances das terapias de ansiedade. Você descobrirá a abordagem perfeita para sua jornada de cura. Não deixe a ansiedade controlar sua vida. Faça a escolha certa hoje e comece sua jornada rumo à paz interior e equilíbrio emocional!</p>
                <a href="https://google.com" target="_blank">
                    <button className="bg-azulescuro rounded-xl h-16 w-full cursor-pointer text-xl font-bold text-white hover:shadow-lg">Clique e comece sua jornada!</button>
                </a>
            </div>
                <iframe className="flex-1 items-center justify-center w-full lg:flex-1 lg:h-3/5" src="https://www.youtube.com/embed/gi2fAAvAWUo?si=LGbyEhulGR1QisY2" title="YouTube video player" allow="accelerometer; autoplay; web-share"></iframe>
        </div>
    )
}