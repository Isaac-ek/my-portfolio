import React from 'react';

const SocialLinks = () => (
  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 mb-8">
    <a
      href="mailto:ekezie.chiemelie@gmail.com"
      className="inline-flex items-center gap-2 px-5 py-3 bg-blue-800 text-white rounded-lg shadow hover:bg-blue-900 transition-colors font-semibold text-base"
      aria-label="Email"
    >
      <span className="font-bold">Email:</span> ekezie.chiemelie@gmail.com
    </a>
    <a
      href="https://www.linkedin.com/in/chiemelie-ekezie-21b029254/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition-colors font-semibold text-base"
      aria-label="Connect on LinkedIn"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2 3.6 4.594v5.602z" />
      </svg>
      Connect on LinkedIn
    </a>
    <a
      href="https://github.com/Isaac-ek"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-3 bg-[#17203a] text-blue-100 rounded-lg shadow hover:bg-blue-900 transition-colors font-semibold text-base"
      aria-label="View GitHub Profile"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
      View GitHub
    </a>
    <a
      href="https://x.com/thisaint_isaac"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-4 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-900 transition-colors"
      aria-label="X (Twitter)"
    >
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
      </svg>
    </a>
  </div>
);

export default SocialLinks;
