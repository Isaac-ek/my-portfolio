import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './case-study.css';
import './securestream-case.css';

const source = 'https://github.com/Isaac-ek/ids-encryption-file-scanner';
const release = "75996945f72f5bdc6ae4c2823d73622f4793f560";
const revision = `${source}/blob/${release}`;
const captureRevision = `${source}/tree/70b26241307037be0b78413b71643686caa4d8a1`;
const imageRoot = '/assets/projects/securestream';
const fileHash = '9a3f7e1857ce7c9c7c55e0327454a8e92f05f3f51fa0a1e2892eb52dbc687afe';
const steps = [
  {
    label: 'Inspect a record',
    title: 'Make the classifier inspectable.',
    text: 'Load a public sample connection record, inspect its features, and run the preserved XGBoost model. The dataset label and the prediction stay separate. In this recorded run, the model predicted Normal and saved event #1.',
    image: 'inspect-record',
    alt: 'The actual connection inspector showing raw sample features, a Normal model prediction, and saved event number 1.',
    caption: 'Actual inference on supplied sample features. This action does not capture traffic or launch an attack.',
  },
  {
    label: 'Review the result',
    title: 'Keep the result and its origin.',
    text: 'The prediction appears in persisted event history with its source, destination, timestamp, and Model replay origin. Filters and exports make the record available for review without presenting it as a live network event.',
    image: 'saved-event',
    alt: 'Actual event history containing the saved Normal prediction with its Model replay origin.',
    caption: 'Event #1 is a model replay. A connected event stream does not mean host packet capture is running.',
  },
  {
    label: 'Protect a sample',
    title: 'Make file protection an explicit action.',
    text: 'Upload the fictional sample-brief.txt file, then encrypt it with AES-256-GCM. The app saves and audits the encrypted copy before removing the plaintext. Classification does not automatically alter files.',
    image: 'encrypted-file',
    alt: 'Actual Files screen showing the encrypted sample-brief.txt.enc backup and confirmation that the original plaintext was removed.',
    caption: 'A separate, authenticated file operation. The screenshot shows the encrypted backup after the original is removed.',
  },
  {
    label: 'Recover & audit',
    title: 'Verify recovery and leave a trace.',
    text: 'Restore the file while retaining its encrypted backup. For this capture, I downloaded the restored file and checked that its bytes exactly matched the original. The audit view records upload, encryption, recovery, and model inference.',
    image: 'audit-history',
    alt: 'Actual verified audit chain listing file recovery, encryption, upload, and model prediction, with the recovery hash expanded.',
    caption: 'The stored hash chain verifies in this sample. It is not an external signature or an immutable ledger.',
  },
] as const;

export default function SecureStreamPage() {
  const project = projects.find((item) => item.caseStudy === '/projects/securestream')!;
  const [selected, setSelected] = useState(0);
  const step = steps[selected];

  useEffect(() => {
    const previous = document.title;
    document.title = 'SecureStream case study — Chiemelie Ekezie';
    return () => { document.title = previous; };
  }, []);

  return (
    <main className="case-study security-case">
      <Link to="/projects" className="case-back">← All selected work</Link>
      <header className="case-intro security-intro">
        <p className="case-eyebrow">SOFTWARE / SECURITY ENGINEERING PROTOTYPE</p>
        <h1>SecureStream</h1>
        <p className="case-deck">Security operations you can inspect.</p>
        <p>{project.description}</p>
        <p><strong>My contribution:</strong> {project.contribution}</p>
        <div className="security-actions">
          <a href="#security-workflow" className="case-primary">Explore the four-step workflow ↓</a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="case-secondary">Open production login ↗</a>
          <a href={`${source}/tree/${release}`} target="_blank" rel="noopener noreferrer" className="case-secondary">Inspect current release source ↗</a>
        </div>
        <p className="security-status">Screenshots need no account · hosted workspace requires an administrator-created login</p>
      </header>

      <figure className="security-cover">
        <img src={`${imageRoot}/overview.jpg`} alt={project.screenshotAlt} width={1440} height={1050} decoding="async" />
        <figcaption>
          <span>The delivered workspace: recent events, activity origins, and file protection in one interface.</span>
          <a href={`${imageRoot}/overview.jpg`} target="_blank" rel="noopener noreferrer">Open full-size overview ↗</a>
        </figcaption>
      </figure>

      <section id="security-workflow" className="security-workflow" aria-labelledby="security-workflow-title">
        <div className="case-section-bar">
          <h2 id="security-workflow-title">One sample investigation, four steps.</h2>
          <span>SELF-PACED / ACTUAL APP</span>
        </div>
        <p className="security-workflow-note">Step through screenshots of a real local run. These captures document an earlier local build; the production login opens the current hosted app. <a href={captureRevision} target="_blank" rel="noopener noreferrer" className="case-inline-link">Inspect the screenshot revision ↗</a></p>
        <div className="security-step-buttons" role="group" aria-label="Security workflow steps">
          {steps.map((item, index) => (
            <button key={item.label} aria-pressed={selected === index} aria-controls="security-step-content" onClick={() => setSelected(index)}>
              <span>0{index + 1}</span>{item.label}
            </button>
          ))}
        </div>
        <div id="security-step-content" className="security-step-copy" aria-live="polite" aria-atomic="true">
          <p className="case-eyebrow">STEP {selected + 1} OF {steps.length}</p>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </div>
        <figure className="security-step-image">
          <img key={step.image} src={`${imageRoot}/${step.image}.jpg`} alt={step.alt} width={1440} height={1050} decoding="async" />
          <figcaption>
            <span>{step.caption}</span>
            <a href={`${imageRoot}/${step.image}.jpg`} target="_blank" rel="noopener noreferrer">Open full-size screenshot ↗</a>
          </figcaption>
        </figure>
        <div className="security-step-footer">
          <button className="case-secondary" disabled={selected === 0} onClick={() => setSelected((value) => value - 1)}>← Previous step</button>
          <span className="case-eyebrow">{selected + 1} / {steps.length}</span>
          <button className="case-secondary" disabled={selected === steps.length - 1} onClick={() => setSelected((value) => value + 1)}>Next step →</button>
        </div>
      </section>

      <section className="case-ownership" aria-labelledby="security-ownership">
        <div><p className="case-eyebrow">OWNERSHIP &amp; DELIVERABLES</p><h2 id="security-ownership">One application, with clear boundaries.</h2><p className="case-muted">I consolidated the detector and website-checking engine, rebuilt the interface, and added the controls that make their behavior inspectable.</p></div>
        <div>
          <ul className="security-deliverables">{project.deliverables?.map((item) => <li key={item}>{item}</li>)}</ul>
          <p className="case-muted">Each customer has separate records, files, encryption keys, audit history, scan target policy, and event delivery. Administrators create team logins, reset member passwords, and approve exact website targets inside their own workspace. The hosted release uses persistent PostgreSQL records, database-backed encrypted files, and shared views that refresh every 15 seconds.</p>
          <a className="case-inline-link" href={`${revision}/docs/customer-workspaces.md`} target="_blank" rel="noopener noreferrer">Inspect customer isolation and provisioning ↗</a>
        </div>
      </section>

      <section className="case-implementation" aria-labelledby="security-evidence">
        <p className="case-eyebrow">IMPLEMENTATION &amp; EVIDENCE</p><h2 id="security-evidence">Check the behavior behind the interface.</h2>
        <div className="security-evidence-grid">
          <article><span>01 / RECOVERY</span><h3>The recovered bytes match.</h3><p>The sample file was encrypted, restored, downloaded, and compared with the original during screenshot capture. The encrypted backup remained available.</p><details><summary>Inspect the sample SHA-256</summary><code>{fileHash}</code><a href={`${imageRoot}/restored-file.jpg`} target="_blank" rel="noopener noreferrer">View the actual recovery screen ↗</a></details></article>
          <article><span>02 / VERIFICATION</span><h3>52 backend tests. Six browser flows.</h3><p>At the linked release, checks pass for customer boundaries, file recovery, approved websites, model inference, and account recovery. A separate PostgreSQL fixture verified competing reset links produce one password change and revoke prior sessions.</p><a href={`${revision}/tests/test_workspaces.py`} target="_blank" rel="noopener noreferrer">Read the customer isolation tests ↗</a><a href={`${revision}/frontend/e2e/workspace.spec.js`} target="_blank" rel="noopener noreferrer">Read the browser workflows ↗</a></article>
          <article><span>03 / MODEL DECISION</span><h3>Keep the result, even when it disappoints.</h3><p>I compared Random Forest and XGBoost candidates using training-only validation. The selected candidate scored lower on the held-out benchmark and failed its release gates, so the active model was retained.</p><a href={`${revision}/docs/experiments/customer-readiness-1.json`} target="_blank" rel="noopener noreferrer">Inspect the experiment results ↗</a></article>
        </div>
      </section>

      <section className="case-implementation" aria-labelledby="security-model">
        <p className="case-eyebrow">OFFLINE EVALUATION / NSL-KDD</p><h2 id="security-model">The model has measurable limits.</h2>
        <p className="case-muted">The preserved XGBoost bundle was evaluated on 22,544 NSL-KDD test records: 77.78% accuracy and 0.5693 macro F1. R2L recall is 12.89%; U2R recall is 13.43%. Those weak classes remain an open problem.</p>
        <figure className="security-model-image"><img src={`${imageRoot}/model-performance.jpg`} alt="Actual model performance screen showing offline metrics and weak R2L and U2R recall alongside the experimental live-capture notice." width={1440} height={1050} loading="lazy" decoding="async" /><figcaption>Actual application metrics. Offline benchmark results do not establish live-network effectiveness.</figcaption></figure>
        <p className="case-evidence-note">Email password recovery is implemented but remains disabled until a sender domain is verified. Administrators can still reset member passwords. Hosted uploads are limited to 3 MiB per file; packet capture requires a separately configured sensor.</p>
        <p className="case-evidence-note">Live flow extraction remains experimental because a network-only sensor cannot observe all host and content features used by the training dataset. Website findings need investigation, ClamAV availability is explicit, and the audit chain is stored in the application database. This project is presented as an engineering prototype.</p>
        <a className="case-inline-link" href={`${revision}/docs/detector-validation.md`} target="_blank" rel="noopener noreferrer">Inspect the benchmark, failed candidate, and capture-validation method ↗</a>
      </section>

      <section className="case-production" aria-labelledby="security-contact">
        <div><p className="case-eyebrow">WORK WITH ME</p><h2 id="security-contact">Need an inspectable operations tool?</h2><p>Talk to me about authenticated dashboards, team workflows, data boundaries, and interfaces that explain their results.</p></div>
        <Link to="/#contact" className="case-secondary">Discuss an engineering project →</Link>
      </section>
    </main>
  );
}
