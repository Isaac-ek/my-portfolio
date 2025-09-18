import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import SocialLinks from '../components/SocialLinks';

const Home = () => (
  <main className="pt-0"> {/* Remove all top padding to eliminate space before Hero */}
    <Hero id="hero" />
    <Projects id="projects" />
    <Skills id="skills" />
    <Contact />
    <SocialLinks />
  </main>
);

export default Home;
