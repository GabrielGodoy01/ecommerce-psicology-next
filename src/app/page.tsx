import { ForYou } from "./components/foryou/foryou";
import { Main } from "./components/main/main";
import { EbookContent } from "./components/ebookcontent/ebookcontent";
import { Profissional } from "./components/profissional/profissional";
import { Contact } from "./components/contact/contact";
import { Promotion } from "./components/promotion/promotion";
import { Footer } from "./components/footer/footer";
import { Testimonials } from "./components/testimonials/testimonials";


export default function Landing() {
  return (
    <main>
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
        <div className="flex items-center justify-center w-full bg-azulclaro">
          <Testimonials />
        </div>
        <div className="flex items-center justify-center w-full bg-white">
          <Profissional />
        </div>
        {/* <div className="flex items-center justify-center w-full bg-azulclaro">
          <Contact />
        </div> */}
        <div className="flex items-center justify-center w-full bg-azulclaro">
          <Promotion />
        </div>
        <div className="flex items-center justify-center w-full bg-azulclaro">
          <Footer />
        </div>
      </div>
    </main>
  )
}
