import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import SocialLinks from '../components/SocialLinks';

const Home = () => (
  <main className="pt-0">
    <Hero id="hero" />
    <About id="about" />
    <Projects id="projects" />
    <Skills id="skills" />
    <Contact />
    <SocialLinks />
  </main>
);

export default Home;
