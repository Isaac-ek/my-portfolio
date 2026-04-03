import Navbar from '../components/Navbar';
import { profile } from '../data/profile';

const AboutPage = () => (
  <>
    <Navbar />
    <div data-aos="zoom-in" data-aos-duration="1000">
      <main className="container mx-auto min-h-[70vh] max-w-5xl px-4 py-28 sm:px-8 md:px-16">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">About</p>
        <h1 className="mb-4 text-center text-5xl font-black text-white sm:text-6xl">
          {profile.name}
        </h1>
        <h2 className="mb-2 text-center text-2xl font-semibold text-slate-200 sm:text-3xl">
          {profile.role}
        </h2>
        <p className="mb-2 text-center text-slate-300">{profile.location}</p>
        <p className="mb-2 text-center text-slate-300">{profile.email}</p>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-10 block text-center text-cyan-300 underline"
      >
        LinkedIn: linkedin.com/in/chiemelie-ekezie-21b029254
      </a>
      <section className="mb-8 w-full">
        <h3 className="mb-2 text-xl font-bold text-white">Summary</h3>
        <p className="mb-4 leading-relaxed text-slate-200">
          Web Developer with 3+ years of experience building and deploying websites for
          nonprofits, startups, and growing businesses. I freelance with multiple
          companies, delivering custom websites and e‑commerce solutions that help
          businesses establish an online presence and sell web‑based products.
          Recently, I earned the <a
            href="https://www.credly.com/badges/1a0ca469-c7f7-4850-b13c-9459ffc24530/linked_in_profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 underline"
          >
            AWS Certified Solutions Architect (SAA‑C03)
          </a>, which
          strengthens my ability to design scalable, secure, cloud‑ready solutions.
          I am open to new opportunities and collaborations.
        </p>
        <h3 className="mb-2 text-xl font-bold text-white">My Stack</h3>
        <p className="mb-4 text-slate-200">
          HTML, CSS, JavaScript, Python, MySQL, MongoDB, Git, GitHub, AWS
        </p>
        <h3 className="mb-2 text-xl font-bold text-white">Familiar With</h3>
        <p className="mb-4 text-slate-200">
          WordPress, UI/UX Design, Figma, REST APIs, <a
            href="https://www.credly.com/badges/0fa81baf-1953-4c20-812e-7d1822152ad8/linked_in_profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 underline"
          >
            Cybersecurity Essentials
          </a>, Cloud Computing, GitHub Pages,
          Responsive Design
        </p>
        <h3 className="mb-2 text-xl font-bold text-white">Work Experience</h3>
        <div className="mb-4">
          <p className="font-semibold text-slate-100">Freelance Web Developer</p>
          <p className="mb-1 text-sm text-slate-400">May 2020 – Present</p>
          <ul className="mb-2 list-inside list-disc text-sm text-slate-200">
            <li>Developed and deployed websites for non-profits and businesses.</li>
            <li>Built e-commerce websites for small businesses with shopping cart and order management.</li>
            <li>Delivered web solutions that supported product visibility and user engagement.</li>
            <li>Consulted with clients to translate business goals into intuitive website designs.</li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-slate-100">Chuga Rex Limited - Web Designer</p>
          <p className="mb-1 text-sm text-slate-400">March 2024 - August 2024 (6 months)</p>
          <ul className="mb-2 list-inside list-disc text-sm text-slate-200">
            <li>Designed, customised, and managed WordPress-based websites for corporate needs.</li>
            <li>Worked on UI consistency, plugin integration, and SEO improvements.</li>
            <li>Collaborated with technical teams on updates, fixes, and client customizations.</li>
          </ul>
        </div>
        <h3 className="mb-2 text-xl font-bold text-white">Education</h3>
        <ul className="mb-4 list-inside list-disc text-sm text-slate-200">
          <li>
            <span className="font-semibold">Covenant University, Ota, Nigeria</span>
            <br />
            Bachelor's Degree, Computer Science
            <br />
            November 2021 – July 2025
          </li>
          <li>
            <span className="font-semibold">Babington Macaulay Junior Seminary</span>
            <br />
            SSCE – Technical Focus
            <br />
            September 2015 – October 2021
          </li>
        </ul>
        <h3 className="mb-2 text-xl font-bold text-white">Certifications</h3>
        <ul className="mb-4 list-inside list-disc text-sm text-slate-200">
          <li>
            <a
              href="https://www.credly.com/badges/1a0ca469-c7f7-4850-b13c-9459ffc24530/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 underline"
            >
              AWS Certified Solutions Architect – SAA-C03 (Credly)
            </a>
          </li>
          <li>
            <a
              href="https://www.credly.com/badges/0fa81baf-1953-4c20-812e-7d1822152ad8/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 underline"
            >
              Cybersecurity Essentials (Cisco) (Credly)
            </a>
          </li>
          <li>Introduction to Python Programming</li>
          <li>Introduction to HTML5</li>
          <li>Data Analysis Using Python</li>
        </ul>
        <h3 className="mb-2 text-xl font-bold text-white">Top Skills</h3>
        <p className="mb-4 text-slate-200">
          Amazon Web Services (AWS), Cloud Computing, User Experience (UX), Web Design and Development,
          Frontend and Backend Integration
        </p>
        <h3 className="mb-2 text-xl font-bold text-white">Hobbies</h3>
        <p className="mb-4 text-slate-200">
          Reading novels, video gaming and continuous learning through coding challenges.
        </p>
      </section>
      <a
        href={profile.resumePath}
        download
        className="inline-block rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 shadow-lg transition hover:bg-cyan-300"
      >
        Download Resume
      </a>
      </main>
    </div>
  </>
);

export default AboutPage;
