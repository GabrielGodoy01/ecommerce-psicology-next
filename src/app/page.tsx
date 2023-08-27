import { ForYou } from "./components/foryou/foryou";
import { Main } from "./components/main/main";
import { EbookContent } from "./components/ebookcontent/ebookcontent";
import { Profissional } from "./components/profissional/profissional";
import { Contact } from "./components/contact/contact";

export default function Landing() {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-screen bg-azulclaro">
        <Main />
      </div>
      <div className="flex items-start justify-center w-full h-screen bg-white pt-20 pb-20">
        <ForYou />
      </div>
      <div className="flex items-center justify-center w-full h-screen bg-white">
        <EbookContent />
      </div>
      <div className="flex items-center justify-center bg-white">
        <Profissional />
      </div>
      <div className="flex items-center justify-center bg-azulclaro w-full">
        <Contact />
      </div>
    </div>
  )
}
