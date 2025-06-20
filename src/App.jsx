import "./app.scss";
import AboutMe from "./components/aboutMe/AboutMe";
import MContact from "./components/contact/MContact";
import Cursor from "./components/cursor/Cursor";
import Header from "./components/header/Header";
import Hero from "./components/landing/hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/protfolio/Portfolio";
const App = () => {
  return (
    <>
      <Cursor />
      <section id="home">
        <Header />
        <Hero />
      </section>
      <section id="about-me"><Parallax type={"aboutMe"} /></section>
      <section >
        <AboutMe />
      </section>
      <section id="portfolio"><Parallax type={"portfolio"} /></section>
      <Portfolio />
      <section id="contact-me"><MContact /></section>
    </>
  );
};

export default App;
