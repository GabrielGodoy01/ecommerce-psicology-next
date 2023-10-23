'use client'

import emailjs from '@emailjs/browser';

export function Form() {
    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_9icma28', 'template_viw52ih', e.target, 'lJdat-GvdsI9_6oxP')
            .then(() => {
                alert('Email enviado!');
            })
            .catch((error) => {
                alert('Erro ao enviar email: ' + error);
            });
    }

    return (
        <form onSubmit={sendEmail} className="md:flex md:flex-row items-center justify-between gap-4">
            <div className="flex-1 flex flex-col">
                <label className="font-bold text-xl mb-2">Seu Nome</label>
                <input className="h-12 shadow appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 md:mb-0" type="text" name="name" placeholder="Nome" required />
            </div>
            <div className="flex-1 flex flex-col">
                <label className="font-bold text-xl mb-2">Email</label>
                <input className="h-12 shadow appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="email" placeholder="exemplo@exemplo.com" required />
            </div>
          
            <div className="md:w-1/3 flex flex-col">
                <label className="text-azulclaro font-bold text-xl mb-2">é o ferros</label>
                <button className="bg-azulescuro rounded-xl h-12 w-full cursor-pointer text-xl font-bold text-white hover:shadow-lg">Enviar</button>
            </div>
        </form>
    )
}