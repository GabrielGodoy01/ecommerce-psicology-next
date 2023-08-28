import { Form } from "./form";

export function Contact() {
    return (
        <div className="flex flex-col max-w-screen-2xl box-border items-stretch justify-center m-6 py-8">
            <div className="inline-block justify-center">
                <p className="text-2xl"><b>Procurando</b> por mais?</p>
                <h1 className="font-bold lg:text-4xl xl:text-5xl text-3xl md:text-3xl  py-8">Converse com nosso especialista ou navegue por mais propriedades.</h1>
            </div>
            <Form />
        </div>
    )
}