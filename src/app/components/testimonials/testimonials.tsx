'use client'

import React from 'react';

const testimonials = [
    {
        name: "João Silva",
        age: 34,
        location: "São Paulo, SP",
        text: "Eu fazia terapia e estava sentindo que não estava evoluindo. Com o livro, consegui entender que aquele tipo de terapia não era o ideal para o meu problema. Hoje, troquei a abordagem e estou muito melhor.",
        stars: 5,
    },
    {
        name: "Maria Fernanda",
        age: 28,
        location: "Rio de Janeiro, RJ",
        text: "Nunca pensei que um eBook poderia me ajudar tanto. As dicas e estratégias apresentadas são muito fáceis de aplicar no dia a dia.",
        stars: 5,
    },
    {
        name: "Carlos Souza",
        age: 19,
        location: "Porto Alegre, RS",
        text: "Estou impressionado com a qualidade do conteúdo. O eBook aborda a ansiedade de uma forma muito clara e direta. Vale cada centavo.",
        stars: 5,
    },
    {
        name: "Ana Paula",
        age: 25,
        location: "Campinas, SP",
        text: "Este eBook mudou minha vida! As técnicas para lidar com a ansiedade são práticas e eficazes. Eu recomendo para todos que precisam de ajuda nessa área.",
        stars: 5,
    },

];

export function Testimonials() {
    return (
        <div className="max-w-screen-2xl mx-auto py-16 px-6 bg-gray-50">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">VEJA A TRANSFORMAÇÃO DE LEITORES QUE PASSARAM PELO</h1>
                <h2 className="text-4xl font-bold text-azulescuro">EBOOK NAVEGANDO PELA ANSIEDADE</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {testimonials.slice(0, 5).map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </div>
    );
}

const TestimonialCard = ({ testimonial } : {testimonial : any}) => {
    return (
        <div className="w-full h-full p-6 bg-white rounded-2xl shadow-lg border-t-4">
            <div className={`border-t-4 ${testimonial.borderColor} p-4`}>
                <div className="flex items-center mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927C9.349 2.063 10.651 2.063 10.951 2.927l1.01 3.09c.07.214.207.402.385.536.178.134.388.204.605.204h3.245c.912 0 1.288 1.165.555 1.674l-2.625 1.9c-.184.133-.333.314-.432.523-.099.209-.145.439-.133.67l.56 3.274c.145.848-.739 1.502-1.46 1.104l-2.812-1.61c-.181-.104-.386-.156-.593-.156s-.412.052-.593.156l-2.812 1.61c-.721.398-1.605-.256-1.46-1.104l.56-3.274c.012-.231-.034-.461-.133-.67-.099-.209-.248-.39-.432-.523L2.225 8.43c-.733-.509-.357-1.674.555-1.674h3.245c.217 0 .427-.07.605-.204.178-.134.315-.322.385-.536l1.01-3.09z" />
                        </svg>
                    ))}
                </div>
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.age} anos, {testimonial.location}</p>
                <p className="mt-4 text-gray-700">{testimonial.text}</p>
            </div>
        </div>
    );
};

export default Testimonials;
