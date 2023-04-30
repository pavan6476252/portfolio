import Footer from "./components/Footer/Footer";
import HomeSec from "./components/Home/HomeSec";

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Qualifications from "./components/qualifications/Qualifications";
import Services from "./components/serivces/Services";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";


export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <HomeSec/>
        <About/>
        <Skills/>
        <Services/>
        <Qualifications/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}