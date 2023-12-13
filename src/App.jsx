import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
