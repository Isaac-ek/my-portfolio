import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './case-study.css';

export default function CommercePage() {
  const project = projects.find((item) => item.caseStudy === '/projects/commerce')!;
  useEffect(() => {
    document.title = 'Chuga Bags product gallery — Chiemelie Ekezie';
    return () => { document.title = 'Ekezie Chiemelie Isaac — Full-Stack Engineer & Visual Designer'; };
  }, []);
  return (
    <main className="case-study">
      <Link to="/projects" className="case-back">← All selected work</Link>
      <header className="case-intro">
        <p className="case-eyebrow">CLIENT WEBSITE / CHUGA REX LIMITED</p>
        <h1>A collection worth exploring.</h1>
        <p className="case-deck">A responsive product gallery for Chuga Bags.</p>
        <p>{project.description}</p>
        <p><strong>My contribution:</strong> {project.contribution}</p>
        <a className="case-primary" href={project.demo} target="_blank" rel="noopener noreferrer">Explore the live gallery ↗</a>
      </header>
      <section className="case-ownership" aria-labelledby="gallery-brief">
        <div><p className="case-eyebrow">THE CLIENT BRIEF</p><h2 id="gallery-brief">Let the products lead.</h2></div>
        <div><p>The client wanted a gallery to showcase school and travel bags. The brief centered on presenting the collection, making its categories easy to browse, and giving visitors access to company and contact information.</p><p>I translated that brief into the gallery’s layout, responsive pages, and collection navigation.</p></div>
      </section>
      <section className="case-implementation" aria-labelledby="gallery-delivery">
        <p className="case-eyebrow">WHAT I DELIVERED</p><h2 id="gallery-delivery">One collection, clear ways to browse.</h2>
        <div className="case-notes-grid">
          <article><span>01 / PRESENTATION</span><h3>Product-led gallery pages.</h3><p>Consistent image layouts give visitors a view of the bags and their different styles.</p></article>
          <article><span>02 / ORGANIZATION</span><h3>Collections that make sense.</h3><p>All Collections, School Bags, and Travel Bag views help visitors find the range they want to explore.</p></article>
          <article><span>03 / RESPONSIVE DESIGN</span><h3>Browse on different screens.</h3><p>Responsive WordPress layouts carry the collection and its navigation across desktop and mobile.</p></article>
          <article><span>04 / BUSINESS CONTEXT</span><h3>A place to discover the brand.</h3><p>{project.businessValue}</p></article>
        </div>
      </section>
      <section className="case-implementation" aria-labelledby="gallery-evidence">
        <p className="case-eyebrow">DELIVERED WORK</p><h2 id="gallery-evidence">Inspect the public gallery.</h2>
        <p className="case-muted">{project.evidenceNote}</p>
        <div className="flex flex-wrap gap-2 mt-6">{project.tech.map((item) => <span key={item} className="case-secondary">{item}</span>)}</div>
      </section>
      <section className="case-production" aria-labelledby="gallery-contact">
        <div><p className="case-eyebrow">A COMPARABLE ASSIGNMENT</p><h2 id="gallery-contact">Have a collection to showcase?</h2><p>Share your products, brand assets, and how you want visitors to browse the collection.</p></div>
        <Link className="case-secondary" to="/#contact">Discuss a gallery project →</Link>
      </section>
    </main>
  );
}
