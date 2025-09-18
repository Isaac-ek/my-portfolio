import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

type HTMLSectionProps = React.HTMLAttributes<HTMLElement>;

const Hero = (props: HTMLSectionProps) => (
  <section
    {...props}
    id="hero"
    className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-8 md:px-16 lg:px-32 w-full max-w-5xl mx-auto pt-16 overflow-hidden"
    data-aos="fade-up"
  >
    {/* Removed Starfield from here */}
    <div className="z-10 w-full flex flex-col items-center justify-center gap-6">
      <span className="text-5xl font-jetbrains text-neonBlue drop-shadow-neon animate-glow">
        👋 Welcome to my portfolio!
      </span>
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold break-words font-jetbrains group-hover:underline group-hover:decoration-wavy group-hover:decoration-blue-400 group">
        <Typewriter
          words={['Chiemelie Ekezie']}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
        Web Developer • Designer • Creator
      </p>
      <a
        href="#projects"
        className="px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors text-base sm:text-lg font-semibold"
      >
        View Projects
      </a>
    </div>
  </section>
);


export default Hero;