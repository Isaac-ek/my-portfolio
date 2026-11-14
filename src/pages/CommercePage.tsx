import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './case-study.css';

export default function CommercePage() {
  const project = projects.find((item) => item.caseStudy === '/projects/commerce')!;
  useEffect(() => {
    document.title = 'Retail commerce case study — Chiemelie Ekezie';
    return () => { document.title = 'Ekezie Chiemelie Isaac — Full-Stack Engineer & Visual Designer'; };
  }, []);

  return (
    <main className="case-study">
      <Link to="/projects" className="case-back">← All selected work</Link>
      <header className="case-intro">
        <p className="case-eyebrow">COMMERCE / CHUGA REX LIMITED</p>
        <h1>Checkout, orders &amp; stock.</h1>
        <p className="case-deck">A retail storefront with connected payment and inventory workflows.</p>
        <p>{project.description}</p>
        <p><strong>My contribution:</strong> {project.contribution}</p>
        <a className="case-primary" href={project.demo} target="_blank" rel="noopener noreferrer">Inspect the live storefront ↗</a>
      </header>
      <section className="case-ownership" aria-labelledby="commerce-problem">
        <div><p className="case-eyebrow">THE BUYING DECISION</p><h2 id="commerce-problem">Connect the steps around a sale.</h2></div>
        <div><p>A retailer needs payment confirmation, order status, and available stock to agree. When those steps are disconnected, staff have to reconcile them and customers can lose track of whether an order is complete.</p><p>This assignment covered the storefront interface and the connections between checkout, orders, and inventory.</p></div>
      </section>
      <section className="case-implementation" aria-labelledby="commerce-delivery">
        <p className="case-eyebrow">WHAT I DELIVERED</p><h2 id="commerce-delivery">From browsing to order confirmation.</h2>
        <div className="case-notes-grid">
          <article><span>01 / STOREFRONT</span><h3>Responsive retail pages.</h3><p>Custom WordPress/WooCommerce templates and product layouts that carry the brand through browsing and checkout.</p></article>
          <article><span>02 / PAYMENTS</span><h3>Paystack inside the checkout flow.</h3><p>Inline checkout and payment-webhook handling connect a confirmed payment with its order record.</p></article>
          <article><span>03 / OPERATIONS</span><h3>Connected stock updates.</h3><p>Inventory synchronization connects warehouse stock records with online product availability.</p></article>
          <article><span>04 / COMMERCIAL RELEVANCE</span><h3>Why connect these steps?</h3><p>{project.businessValue}</p></article>
        </div>
      </section>
      <section className="case-implementation" aria-labelledby="commerce-evidence">
        <p className="case-eyebrow">EVIDENCE &amp; OUTCOME SCOPE</p><h2 id="commerce-evidence">Delivered work, with clear limits.</h2>
        <p className="case-muted">{project.evidenceNote}</p>
        <p className="case-evidence-note">An outcome study would compare payment failures, duplicate-order incidents, stock mismatches, and support requests across a stated period. Those records are not included in this case study.</p>
        <div className="flex flex-wrap gap-2 mt-6">{project.tech.map((item) => <span key={item} className="case-secondary">{item}</span>)}</div>
      </section>
      <section className="case-production" aria-labelledby="commerce-contact">
        <div><p className="case-eyebrow">A COMPARABLE ASSIGNMENT</p><h2 id="commerce-contact">Working on a checkout or stock problem?</h2><p>Share your storefront, payment provider, inventory setup, and the point where the workflow breaks.</p></div>
        <Link className="case-secondary" to="/#contact">Discuss a commerce project →</Link>
      </section>
    </main>
  );
}
