import React from 'react';

const Testimonials = (props: React.HTMLAttributes<HTMLElement>) => (
	<section {...props} className="container mx-auto py-20 px-4 bg-transparent" data-aos="fade-up">
		<h2 className="text-5xl font-bold mb-12 text-center text-blue-100 font-jetbrains group-hover:underline group-hover:decoration-wavy group-hover:decoration-blue-400 group">Testimonials</h2>
		{/* Swiper component and mapping over testimonials removed as per request */}
	</section>
);

export default Testimonials;
