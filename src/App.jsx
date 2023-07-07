import "./App.css";
import Resume from "./components/Resume/Resume";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Pricing from "./components/pricing/Pricing";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <main>
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </main>
  );
}

export default App;
