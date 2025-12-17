import React from 'react';
import Navbar from '../components/Navbar';

const AboutPage = () => (
  <>
    <Navbar />
    <div data-aos="zoom-in" data-aos-duration="1000">

        <main className="container mx-auto py-20 px-4 max-w-3xl bg-transparent min-h-[70vh] flex flex-col items-center justify-center">
      <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-blue-100 font-jetbrains text-center">
        Chiemelie Ekezie
      </h1>
      <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-blue-300 text-center">
        Fullstack Developer (Frontend-Heavy)
      </h2>
      <p className="mb-2 text-blue-200 text-center">Lagos State, Nigeria</p>
      <p className="mb-2 text-blue-200 text-center">ekezie.chiemelie@gmail.com</p>
      <a
        href="https://linkedin.com/in/chiemelie-ekezie-21b029254"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-6 text-blue-400 underline text-center block"
      >
        LinkedIn: linkedin.com/in/chiemelie-ekezie-21b029254
      </a>
      <section className="mb-8 w-full">
        <h3 className="text-xl font-bold text-blue-200 mb-2">Summary</h3>
        <p className="text-blue-100 mb-4 leading-relaxed">
          Web Developer with 3+ years of experience building and deploying websites for
          nonprofits, startups, and growing businesses. I freelance with multiple
          companies, delivering custom websites and e‑commerce solutions that help
          businesses establish an online presence and sell web‑based products.
          Recently, I earned the <a
            href="https://www.credly.com/badges/1a0ca469-c7f7-4850-b13c-9459ffc24530/linked_in_profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 underline"
          >
            AWS Certified Solutions Architect (SAA‑C03)
          </a>, which
          strengthens my ability to design scalable, secure, cloud‑ready solutions.
          I am open to new opportunities and collaborations.
        </p>
        <h3 className="text-xl font-bold text-blue-200 mb-2">My Stack</h3>
        <p className="text-blue-100 mb-4">
          HTML, CSS, JavaScript, Python, MySQL, MongoDB, Git, GitHub, AWS
        </p>
        <h3 className="text-xl font-bold text-blue-200 mb-2">Familiar With</h3>
        <p className="text-blue-100 mb-4">
          WordPress, UI/UX Design, Figma, REST APIs, <a
            href="https://www.credly.com/badges/0fa81baf-1953-4c20-812e-7d1822152ad8/linked_in_profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 underline"
          >
            Cybersecurity Essentials
          </a>, Cloud Computing, GitHub Pages,
          Responsive Design
        </p>
        <h3 className="text-xl font-bold text-blue-200 mb-2">Work Experience</h3>
        <div className="mb-4">
          <p className="font-semibold text-blue-100">Freelance Web Developer</p>
          <p className="text-blue-200 text-sm mb-1">May 2020 – Present</p>
          <ul className="list-disc list-inside text-blue-100 text-sm mb-2">
            <li>Developed and deployed websites for non-profits and businesses.</li>
            <li>Built e-commerce websites for small businesses with shopping cart and order management.</li>
            <li>Delivered web solutions that supported product visibility and user engagement.</li>
            <li>Consulted with clients to translate business goals into intuitive website designs.</li>
          </ul>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-blue-100">Chuga Rex Limited – Web Designer</p>
          <p className="text-blue-200 text-sm mb-1">March 2024 - August 2024 (6 months)</p>
          <ul className="list-disc list-inside text-blue-100 text-sm mb-2">
            <li>Designed, customised, and managed WordPress-based websites for corporate needs.</li>
            <li>Worked on UI consistency, plugin integration, and SEO improvements.</li>
            <li>Collaborated with technical teams on updates, fixes, and client customizations.</li>
          </ul>
        </div>
        <h3 className="text-xl font-bold text-blue-200 mb-2">Education</h3>
        <ul className="list-disc list-inside text-blue-100 text-sm mb-4">
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
        <h3 className="text-xl font-bold text-blue-200 mb-2">Certifications</h3>
        <ul className="list-disc list-inside text-blue-100 text-sm mb-4">
          <li>
            <a
              href="https://www.credly.com/badges/1a0ca469-c7f7-4850-b13c-9459ffc24530/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline"
            >
              AWS Certified Solutions Architect – SAA-C03 (Credly)
            </a>
          </li>
          <li>
            <a
              href="https://www.credly.com/badges/0fa81baf-1953-4c20-812e-7d1822152ad8/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline"
            >
              Cybersecurity Essentials (Cisco) (Credly)
            </a>
          </li>
          <li>Introduction to Python Programming</li>
          <li>Introduction to HTML5</li>
          <li>Data Analysis Using Python</li>
        </ul>
        <h3 className="text-xl font-bold text-blue-200 mb-2">Top Skills</h3>
        <p className="text-blue-100 mb-4">
          Amazon Web Services (AWS), Cloud Computing, User Experience (UX), Web Design and Development,
          Frontend and Backend Integration
        </p>
        <h3 className="text-xl font-bold text-blue-200 mb-2">Hobbies</h3>
        <p className="text-blue-100 mb-4">
          Reading novels, video gaming and continuous learning through coding challenges.
        </p>
      </section>
      <a
        href="/Chiemelie_Ekezie_Resume.pdf"
        download
        className="inline-block px-6 py-3 bg-blue-600 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg hover:scale-105 transition"
      >
        Download CV
      </a>
    </main>

    </div>

  </>
);

export default AboutPage;
