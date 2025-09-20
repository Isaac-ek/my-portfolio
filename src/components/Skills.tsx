import React from 'react';
import { motion } from 'framer-motion';

const skills = [
	'Cloud Computing (AWS)',
	'User Experience (UX)',
	'E-Commerce',
	'Calculations',
	'Cybersecurity',
	'Front-End Development',
	'Data Analysis',
	'Statistical Data Analysis',
	'Software Development',
	'Web Development',
	'Introduction to HTML5',
	// Add more as needed
];

const cardVariants = {
	hidden: { opacity: 0, y: 60, scale: 0.95 },
	visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const Skills = (props: React.HTMLAttributes<HTMLElement>) => (
	<section
		{...props}
		className="container mx-auto py-20 px-4 sm:px-8 md:px-16 lg:px-32 max-w-4xl"
		id="skills"
		data-aos="fade-up"
	>
		<h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center font-jetbrains group-hover:underline group-hover:decoration-wavy group-hover:decoration-blue-400 group">
			Skills & Certifications
		</h2>
		<div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
			{skills.map((skill, idx) => (
				<motion.div
					key={skill}
					className="bg-blue-900/80 rounded-xl shadow-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer group transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-500 hover:text-white border border-blue-800 animate-fadeIn"
					variants={cardVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					transition={{ delay: idx * 0.10 }}
				>
					<span className="text-base sm:text-lg font-extrabold font-mono group-hover:font-caveat group-hover:text-xl transition-all duration-300 text-blue-100 break-words whitespace-normal">
						{skill}
					</span>
				</motion.div>
			))}
		</div>
	</section>
);

export default Skills;