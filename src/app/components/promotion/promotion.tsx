import { CountdownTimer } from "./countdowntimer";

export  function Promotion() {

    const targetDate = new Date();
    targetDate.setHours(0, 0, 0, 0);
    targetDate.setDate(targetDate.getDate() + 15);

    return (
        <div className="my-8 md:my-16 py-8 px-8 md:py-12 md:px-16 bg-azulescuro max-w-[90%] md:max-w-[50%] items-center w-full box-border rounded-[20px] drop-shadow-lg" >
            <h1 className="font-bold text-white text-center lg:text-4xl xl:text-5xl text-2xl md:text-3xl">OFERTA EXCLUSIVA!</h1>
            <div className="text-center text-white py-4 md:py-8"><span className="lg:text-2xl xl:text-3xl text-lg md:text-xl">de </span><span className="lg:text-2xl xl:text-3xl text-lg md:text-xl line-through">R$49,99</span><span className="lg:text-2xl xl:text-3xl text-lg md:text-xl"> por </span><span className="lg:text-4xl xl:text-5xl text-2xl md:text-3xl font-bold">R$34,99</span></div>
            <a href="https://google.com" target="_blank">
                <button className="bg-azulclaro rounded-xl h-16 w-full cursor-pointer text-xl font-bold text-white hover:shadow-lg">COMPRE AGORA</button>
            </a>
            <div className="py-4 md:py-8">
                <div className="pb-2">
                    <p className="inline-flex text-white text-lg items-center"> 
                        <svg className="mr-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 40" fill="none">
                            <path d="M29.18 11.16L16 24.34L8.82 17.18L6 20L16 30L32 14L29.18 11.16ZM20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 36C11.16 36 4 28.84 4 20C4 11.16 11.16 4 20 4C28.84 4 36 11.16 36 20C36 28.84 28.84 36 20 36Z" fill="white"/>
                        </svg>
                        Acesso vitalício
                    </p>
                    
                </div>
                <div className="pb-2">
                    <p className="inline-flex text-white text-lg items-center"> 
                        <svg className="mr-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 40" fill="none">
                            <path d="M29.18 11.16L16 24.34L8.82 17.18L6 20L16 30L32 14L29.18 11.16ZM20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 36C11.16 36 4 28.84 4 20C4 11.16 11.16 4 20 4C28.84 4 36 11.16 36 20C36 28.84 28.84 36 20 36Z" fill="white"/>
                        </svg>
                        Mais de 50 páginas de conteúdo
                    </p>
                    
                </div>
                <div>
                    <p className="inline-flex text-white text-lg items-center"> 
                        <svg className="mr-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 40" fill="none">
                            <path d="M29.18 11.16L16 24.34L8.82 17.18L6 20L16 30L32 14L29.18 11.16ZM20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 36C11.16 36 4 28.84 4 20C4 11.16 11.16 4 20 4C28.84 4 36 11.16 36 20C36 28.84 28.84 36 20 36Z" fill="white"/>
                        </svg>
                        Quizzes interativos
                    </p>
                    
                </div>
            </div>
            <CountdownTimer targetDate={targetDate} />
        </div>
    )
}