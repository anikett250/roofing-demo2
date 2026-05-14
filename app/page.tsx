import Navbar from "./components/navbar"
import Header from "./components/header"
import Header2 from "./components/header2"
import Header3 from "./components/header3"
import Contact from "./components/contact"
import Learnmore from "./components/learnmore"
import Footer from "./components/footer"

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <section id="header">
          <Header />
        </section>
        <section id="header2">
          <Header2 />
        </section>
        <section id="header3">
          <Header3 />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Learnmore />
        <Footer />
      </div>
    </>
  );
}
