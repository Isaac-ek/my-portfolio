import React from 'react';
import { motion } from 'framer-motion';

const skills: Array<{ label: string; url?: string }> = [
  { label: 'Cloud Computing (AWS)', url: 'https://www.credly.com/badges/1a0ca469-c7f7-4850-b13c-9459ffc24530/linked_in_profile' },
  { label: 'User Experience (UX)' },
  { label: 'E-Commerce' },
  { label: 'Calculations' },
  { label: 'Cybersecurity', url: 'https://www.credly.com/badges/0fa81baf-1953-4c20-812e-7d1822152ad8/linked_in_profile' },
  { label: 'Front-End Development' },
  { label: 'Data Analysis' },
  { label: 'Statistical Data Analysis' },
  { label: 'Software Development' },
  { label: 'Web Development' },
  { label: 'HTML5' },
  // Add more as needed
];

const cardVariants = {
	hidden: { opacity: 0, y: 60, scale: 0.95 },
	visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
	hover: { scale: 1.18, boxShadow: "0 8px 32px 0 rgba(0, 123, 255, 0.35)", transition: { duration: 0.35 } }
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
					key={skill.label}
					className="bg-blue-900/80 rounded-xl shadow-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer group border border-blue-800 animate-fadeIn"
					variants={cardVariants}
					initial="hidden"
					whileInView="visible"
					whileHover="hover"
					viewport={{ once: true, amount: 0.3 }}
					transition={{ delay: idx * 0.10 }}
				>
					{skill.url ? (
						<a
							href={skill.url}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${skill.label} (opens in new tab)`}
							className="text-base sm:text-lg font-extrabold font-mono group-hover:font-caveat group-hover:text-xl transition-all duration-300 text-blue-100 group-hover:text-blue-400 break-words whitespace-normal underline"
						>
							{skill.label}
						</a>
					) : (
						<span className="text-base sm:text-lg font-extrabold font-mono group-hover:font-caveat group-hover:text-xl transition-all duration-300 text-blue-100 group-hover:text-blue-400 break-words whitespace-normal">
							{skill.label}
						</span>
					)}
				</motion.div>
			))}
		</div>
	</section>
);

export default Skills;