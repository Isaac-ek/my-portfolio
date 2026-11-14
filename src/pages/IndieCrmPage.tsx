import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import CrmTeamPreview from '../components/CrmTeamPreview';
import './case-study.css';

const chapters = [
  { at: 0, title: 'Capture', heading: 'One inquiry. One lead record.', text: 'Maya at Studio Lantern needs a brand refresh and a four-page marketing site before June. Keep her message attached to the opportunity instead of copying it between tools.', screen: 'lead-inbox', caption: 'Actual application: lead inbox with seeded sample contacts.' },
  { at: 7, title: 'Qualify', heading: 'Move the lead forward with context.', text: 'Qualify Maya’s inquiry and record a discovery call as the next action. The stage changes while her original message stays attached to the lead.', screen: 'lead-detail', caption: 'Actual application: Maya’s lead record, workflow controls, and timeline.' },
  { at: 15, title: 'Retrieve', heading: 'Find the conversation behind the lead.', text: 'Search for “brand refresh” and return to Maya’s inquiry. The application combines keyword and semantic retrieval; this public sample uses a local text filter.', screen: 'search-memory', caption: 'Actual application: conversation-memory search with source excerpts.' },
  { at: 23, title: 'Follow up', heading: 'Leave a clear next action.', text: 'The qualified lead now has a discovery-call follow-up. In the application, server actions save the change and refresh affected views. This sample keeps its state in your browser for this visit.', screen: 'dashboard', caption: 'Actual application: dashboard overview of the workspace and follow-ups.' },
];
const duration = 30;
const timeLabel = (value: number) => `${Math.floor(value / 60)}:${String(value % 60).padStart(2, '0')}`;

export default function IndieCrmPage() {
  const project = projects[0];
  const [elapsed, setElapsed] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [tourRun, setTourRun] = useState(0);
  const [query, setQuery] = useState('brand refresh');
  const [submittedQuery, setSubmittedQuery] = useState('brand refresh');
  const chapterIndex = chapters.reduce((selected, chapter, index) => elapsed >= chapter.at ? index : selected, 0);
  const chapter = chapters[chapterIndex];
  const nextChapter = chapters[chapterIndex + 1];
  const chapterEnd = nextChapter?.at ?? duration;
  const qualified = chapterIndex >= 1;
  const hasMatch = submittedQuery.trim().length > 0 && submittedQuery.toLowerCase().split(/\s+/).every((word) =>
    'Maya Cole Studio Lantern brand refresh four-page marketing site before June discovery call'.toLowerCase().includes(word),
  );

  useEffect(() => {
    document.title = 'Indie CRM case study — Chiemelie Ekezie';
    return () => { document.title = 'Ekezie Chiemelie Isaac — Full-Stack Engineer & Visual Designer'; };
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setElapsed((value) => Math.min(value + 1, duration)), 1000);
    return () => window.clearInterval(timer);
  }, [playing]);

  useEffect(() => {
    if (elapsed === duration) setPlaying(false);
  }, [elapsed]);

  const seek = (value: number) => {
    setPlaying(false);
    setElapsed(value);
  };

  return (
    <main className="case-study">
      <Link to="/projects" className="case-back">← All selected work</Link>
      <header className="case-intro">
        <p className="case-eyebrow">SOFTWARE / INDEPENDENT PROJECT</p>
        <h1>Indie CRM</h1>
        <p className="case-deck">From the first inquiry to a follow-up worth remembering.</p>
        <p>A CRM for freelancers and small teams who need their leads, conversations, and next actions in one workspace.</p>
        <p><strong>My contribution:</strong> {project.contribution}</p>
        <a href="#walkthrough" className="case-inline-link">Explore the 30-second walkthrough ↓</a>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="case-inline-link case-source-link">Inspect the public source ↗</a>
      </header>

      <section id="walkthrough" className="crm-walkthrough" aria-labelledby="walkthrough-title">
        <div className="case-section-bar">
          <h2 id="walkthrough-title">One complete lead workflow</h2>
          <span>00:30 / NO LOGIN NEEDED</span>
        </div>
        <p className="walkthrough-disclosure">Interactive reconstruction · fictional sample data · runs locally in this page. Actual application screenshots follow each chapter.</p>
        <div className="walkthrough-controls">
          <button className="case-primary" onClick={() => {
            if (elapsed === duration) { setElapsed(0); setTourRun((value) => value + 1); }
            setPlaying((value) => !value);
          }}>{playing ? 'Pause walkthrough' : elapsed === duration ? 'Replay walkthrough' : elapsed > 0 ? 'Resume walkthrough' : 'Play 30-second walkthrough'} {playing ? 'Ⅱ' : '▶'}</button>
          <span className="case-time" aria-hidden="true">{timeLabel(elapsed)} / {timeLabel(duration)}</span>
          <label className="sr-only" htmlFor="walkthrough-progress">Walkthrough position in seconds</label>
          <input id="walkthrough-progress" type="range" min="0" max={duration} value={elapsed} onChange={(event) => seek(Number(event.target.value))} aria-valuetext={`${elapsed} of ${duration} seconds`} />
          <button className="case-secondary" disabled={elapsed === duration} onClick={() => seek(chapterEnd)}>{nextChapter ? 'Next chapter →' : 'Finish tour'}</button>
          <button className="case-secondary" onClick={() => { seek(0); setTourRun((value) => value + 1); setQuery('brand refresh'); setSubmittedQuery('brand refresh'); }}>Reset</button>
        </div>
        <p className="walkthrough-next" aria-live="off">{elapsed === duration ? 'Tour complete. Replay it or explore any chapter.' : playing ? nextChapter ? `Next: ${nextChapter.title} in ${chapterEnd - elapsed}s` : `Tour finishes in ${duration - elapsed}s` : 'Play the tour, or choose any chapter to jump ahead.'}</p>
        <div className="walkthrough-chapters" role="group" aria-label="Walkthrough chapters">
          {chapters.map((item, index) => (
            <button key={item.title} aria-pressed={index === chapterIndex} onClick={() => seek(item.at)}>
              <span>{timeLabel(item.at)}</span> {String(index + 1).padStart(2, '0')} / {item.title}
              <span className="chapter-progress" aria-hidden="true" style={{ width: `${Math.max(0, Math.min(100, (elapsed - item.at) / ((chapters[index + 1]?.at ?? duration) - item.at) * 100))}%` }} />
            </button>
          ))}
        </div>
        <div className="walkthrough-body">
          <div className="walkthrough-narrative" aria-live="polite" aria-atomic="true">
            <span className="case-eyebrow">{String(chapterIndex + 1).padStart(2, '0')} / {chapter.title}</span>
            <h3>{chapter.heading}</h3>
            <p>{chapter.text}</p>
          </div>
          <div className="crm-sample">
            <div className="sample-top"><span>NORTHSTAR STUDIO</span><span>SAMPLE WORKSPACE</span></div>
            <div className="sample-pipeline" aria-label="Sample lead pipeline">
              {['New', 'Qualified', 'Proposal', 'Won'].map((stage) => (
                <div key={stage} className={stage === (qualified ? 'Qualified' : 'New') ? 'sample-stage active' : 'sample-stage'}>
                  <span>{stage}</span>
                  {stage === (qualified ? 'Qualified' : 'New') && <strong>Maya Cole <small>Studio Lantern</small></strong>}
                </div>
              ))}
            </div>
            {chapterIndex === 2 ? (
              <div className="sample-detail">
                <form onSubmit={(event) => { event.preventDefault(); setPlaying(false); setSubmittedQuery(query); }}>
                  <label htmlFor="sample-search">Search this sample lead</label>
                  <div className="sample-search-row">
                    <input id="sample-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try brand refresh or Maya" />
                    <button type="submit" className="case-primary">Search</button>
                  </div>
                </form>
                <div role="status" className="sample-search-result">
                  {hasMatch ? <><span className="case-eyebrow">1 MATCH / ORIGINAL INQUIRY</span><h4>Maya Cole · Studio Lantern</h4><blockquote>“Looking for a brand refresh and a four-page marketing site before June.”</blockquote><button className="case-inline-link" onClick={() => seek(chapters[3].at)}>Open lead &amp; next action →</button></> : <p>No matches in this one-lead sample. Try “Maya”, “brand refresh”, or “marketing site”.</p>}
                </div>
              </div>
            ) : (
              <div className="sample-detail">
                <div className="sample-record-heading"><h4>Maya Cole</h4><span className="sample-status">{qualified ? 'Qualified' : 'New inquiry'}</span></div>
                <p className="sample-company">Studio Lantern · maya@studiolantern.test</p>
                <blockquote>“Looking for a brand refresh and a four-page marketing site before June.”</blockquote>
                <div className="sample-next"><span className="case-eyebrow">NEXT ACTION</span><p>{qualified ? 'Schedule a discovery call and clarify the budget.' : 'Review the inquiry and qualify the opportunity.'}</p></div>
                {chapterIndex < 2 && <button className="case-primary" disabled={qualified} onClick={() => seek(chapters[1].at)}>{qualified ? '✓ Lead qualified in sample' : 'Move lead to Qualified →'}</button>}
                {chapterIndex === 3 && <p className="sample-saved">✓ Sample workflow complete: inquiry → qualification → search → follow-up.</p>}
              </div>
            )}
          </div>
        </div>
        <CrmTeamPreview key={tourRun} currentStage={qualified ? 'Qualified' : 'New'} />
        <details open className="actual-screenshot">
          <summary>View the actual {chapter.title.toLowerCase()} screen ↗</summary>
          <figure>
            <a href={`/assets/projects/indie-crm/${chapter.screen}.png`} target="_blank" rel="noopener noreferrer"><img src={`/assets/projects/indie-crm/${chapter.screen}.png`} alt={chapter.caption} loading="lazy" /></a>
            <figcaption>{chapter.caption} Open the image to inspect the full screen.</figcaption>
          </figure>
        </details>
      </section>

      <section className="case-ownership" aria-labelledby="ownership-title">
        <div><p className="case-eyebrow">MY CONTRIBUTION</p><h2 id="ownership-title">Built across the product.</h2></div>
        <div><p>I designed and built the application interface, workspace authentication and membership checks, the PostgreSQL/Prisma data model, and the lead-management actions.</p><p>I also implemented conversation-memory search, AI tagging and reply assistance, recorded AI provenance, webhook intake, and the deployment setup.</p><p className="case-muted">Next.js, Auth.js, Prisma, and OpenAI provide the framework, authentication, data access, and model services.</p></div>
      </section>

      <section className="case-implementation" aria-labelledby="inspection-title">
        <p className="case-eyebrow">INSPECT THE IMPLEMENTATION</p>
        <h2 id="inspection-title">Permissions and writes live on the server.</h2>
        <p className="case-muted">The public source checks the current workspace and role before a workflow update, scopes the write to that tenant, records an audit event, and revalidates affected routes.</p>
        <div className="case-notes-grid">
          <article><h3>Who can do what?</h3><div className="permission-table-wrap"><table className="permission-table"><caption>Workspace capabilities from the public role matrix</caption><thead><tr><th scope="col">Action</th><th scope="col">Member</th><th scope="col">Admin</th><th scope="col">Owner</th></tr></thead><tbody><tr><th scope="row">Read / edit leads</th><td>Yes</td><td>Yes</td><td>Yes</td></tr><tr><th scope="row">Add notes</th><td>Yes</td><td>Yes</td><td>Yes</td></tr><tr><th scope="row">Delete leads</th><td>No</td><td>Yes</td><td>Yes</td></tr><tr><th scope="row">Manage members</th><td>No</td><td>Yes</td><td>Yes</td></tr><tr><th scope="row">Manage owners</th><td>No</td><td>No</td><td>Yes</td></tr></tbody></table></div><a className="case-inline-link" href="https://github.com/Isaac-ek/Indie-CRM/blob/main/src/lib/rbac.ts" target="_blank" rel="noopener noreferrer">Read the role matrix ↗</a></article>
          <article><h3>Follow the actual write.</h3><p>The workflow action uses both the lead ID and workspace tenant ID in its database update. Workspace membership is resolved for the authenticated user before this action.</p><ul className="case-source-list"><li><a href="https://github.com/Isaac-ek/Indie-CRM/blob/main/src/lib/lead-actions.ts#L265" target="_blank" rel="noopener noreferrer">Workflow action and tenant-scoped write ↗</a></li><li><a href="https://github.com/Isaac-ek/Indie-CRM/blob/main/src/lib/workspaces.ts" target="_blank" rel="noopener noreferrer">Workspace membership checks ↗</a></li><li><a href="https://github.com/Isaac-ek/Indie-CRM/blob/main/test/rbac.test.ts" target="_blank" rel="noopener noreferrer">Permission tests and denied actions ↗</a></li></ul></article>
        </div>
        <p className="case-evidence-note">The sample above illustrates the behavior. These source files and tests expose the implementation for review; the sample is not a test of two live authenticated sessions.</p>
      </section>

      <section className="case-implementation" aria-labelledby="implementation-title">
        <p className="case-eyebrow">ENGINEERING NOTES</p>
        <h2 id="implementation-title">Implementation &amp; outcomes</h2>
        <div className="case-notes-grid">
          <article><span>01 / WORKSPACE BOUNDARIES</span><h3>Access follows membership.</h3><p>Authenticated server actions check workspace membership and role permissions. Business records carry a tenant ID so data access can be scoped to the active workspace.</p></article>
          <article><span>02 / SAVED CHANGES</span><h3>Persist, then revalidate.</h3><p>Lead actions write through Prisma to PostgreSQL, then revalidate the dashboard, inbox, search, and lead-detail routes. Other sessions see the saved state on refresh or navigation.</p></article>
          <article><span>03 / RETRIEVAL</span><h3>Return the source, too.</h3><p>Search combines keyword matches and stored message/note embeddings, with pgvector retrieval and a local similarity fallback. Results link back to the lead and supporting conversation.</p></article>
          <article><span>04 / AI PROVENANCE</span><h3>Keep generated work traceable.</h3><p>AI output is stored with its model, prompt version, and input summary. Deterministic local fallbacks keep core demonstrations usable without a model API connection.</p></article>
        </div>
        <p className="case-evidence-note">Performance scope: no repeatable search or cross-session propagation benchmark is published. The walkthrough demonstrates the workflow; it does not measure database-query or end-to-end request latency.</p>
      </section>

      <section className="case-production" aria-labelledby="production-title">
        <div><p className="case-eyebrow">PRODUCTION APPLICATION</p><h2 id="production-title">Continue in the full workspace.</h2><p>The deployed application requires an account and workspace access.</p></div>
        <a className="case-secondary" href={project.demo} target="_blank" rel="noopener noreferrer">Open production login ↗</a>
      </section>
      <Link to="/projects" className="case-back">← Back to selected work</Link>
    </main>
  );
}
