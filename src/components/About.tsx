import React from 'react';

const techStack = [
	{ name: 'React', icon: '⚛️' },
	{ name: 'TypeScript', icon: '🟦' },
	{ name: 'Tailwind CSS', icon: '🌬️' },
	{ name: 'Node.js', icon: '🟩' },
	// Add more as needed
];

const About = (props: React.HTMLAttributes<HTMLElement>) => (
	<section
		{...props}
		className="container mx-auto py-16 px-4 sm:px-8 md:px-16 lg:px-32 text-center max-w-4xl bg-transparent"
		data-aos="fade-up"
	>
		<h2 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-100 font-jetbrains group-hover:underline group-hover:decoration-wavy group-hover:decoration-blue-400 group">
			About Me
		</h2>
		<div data-aos="fade-up" data-aos-duration="1000">
			{/* your content */}
			<p className="mb-6 max-w-2xl mx-auto text-base sm:text-lg text-blue-100">
				Hi! I'm a passionate web developer with a love for building beautiful,
				interactive, and accessible web apps. I enjoy working with modern tech and
				always strive to learn more.
			</p>
		</div>

		<div className="flex flex-wrap justify-center gap-6 mb-8">
			{techStack.map((tech) => (
				<div
					key={tech.name}
					className="flex flex-col items-center min-w-[80px]"
					data-aos="zoom-in"
				>
					<span className="text-2xl sm:text-3xl mb-1 animate-bounce">
						{tech.icon}
					</span>
					<span className="text-xs sm:text-base font-medium">
						{tech.name}
					</span>
				</div>
			))}
		</div>
		<a
			href="/Chiemelie_Ekezie_Resume.pdf"
			download
			className="inline-block px-4 sm:px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold text-sm sm:text-base hidden"
		>
			Download CV
		</a>
	</section>
);

export default About;