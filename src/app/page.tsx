import { ForYou } from "./components/foryou/foryou";
import { Main } from "./components/main/main";
import { EbookContent } from "./components/ebookcontent/ebookcontent";
import { Profissional } from "./components/profissional/profissional";
import { Contact } from "./components/contact/contact";
import Link from "next/link";


export default function Landing() {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-screen bg-azulclaro">
        <Main />
      </div>
      <div className="flex items-center justify-center w-full lg:h-screen bg-white">
        <ForYou />
      </div>
      <div id="section-1" className="flex items-center justify-center w-full lg:h-screen bg-azulclaro">
        <EbookContent />
      </div>
      <div className="flex items-center justify-center w-full bg-white">
        <Profissional />
      </div>
      <div className="flex items-center justify-center w-full  bg-azulclaro">
        <Contact />
      </div>
    </div>
  )
}
