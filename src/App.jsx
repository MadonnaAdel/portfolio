import "./app.scss";
import AboutMe from "./components/aboutMe/AboutMe";
import Contact from './components/contact/contact.jsx';
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
      <section id="services"><Parallax type={"services"} /></section>
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="portfolio"><Parallax type={"portfolio"} /></section>
      <Portfolio />
      <section id="contact-me"><Contact /></section>

    </>
  );
};

export default App;
