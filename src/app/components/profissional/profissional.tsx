import Image from 'next/image';
import vini from './assets/vini.png';

export function Profissional() {
    return (
        <div className="flex flex-col md:flex-row max-w-screen-2xl box-border items-center justify-center mx-6 pt-4 md:pt-10 lg:py-0 pb-10">
            <div className="flex flex-1 rounded-[40px] justify-center items-center mb-4 md:mb-0 md:pr-12">
                <Image
                    src={vini}
                    alt="Imagem de profissional"
                    quality={100}
                    layout="intrinsic"
                    className="rounded-[40px] w-full h-auto object-cover max-w-xs md:max-w-md lg:max-w-lg"
                />
            </div>
            <div className="flex-1 flex flex-col items-start justify-center">
                <h1 className="w-full font-bold text-center md:text-left lg:text-4xl xl:text-5xl text-3xl md:text-3xl">
                    Recomendado por profissionais
                </h1>
                <h2 className="w-full font-bold text-center md:text-left lg:text-4xl xl:text-5xl text-3xl md:text-3xl text-azulescuro pt-2 md:pt-4">
                    Psicólogo Vinícius Sing
                </h2>
                <p className="text-base text-justify py-4 lg:py-9">
                    Psicólogo com experiência em diversas áreas. Ele afirma: “Citação dele sobre o livroCitação dele sobre o livroCitação dele sobre o livroCitação dele sobre o livroCitação dele sobre o livroCitação dele sobre o livroCitação dele sobre o livroCitação dele sobre o livroCitação dele sobre o livro”.
                </p>
                <a href="https://chat.whatsapp.com/CnaNlAjYWbl6fUyt5lARdr" target="_blank" className="w-full">
                    <button className="bg-azulescuro rounded-xl h-16 w-full cursor-pointer text-xl font-bold text-white hover:shadow-lg">
                        Entre em contato
                    </button>
                </a>
            </div>
        </div>
    );
}
