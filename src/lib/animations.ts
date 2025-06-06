import { gsap } from 'gsap';

export const animateMainStagger = () => {
	gsap.from('.animate-item', {
		opacity: 0,
		y: 10,
		duration: 1,
		delay: 0.1,
		stagger: 0.1,
		ease: 'power4.out'
	});
};

export const animateTitle = () => {
	gsap.from('.animate-title', {
		opacity: 0,

		x: 20,
		duration: 1,
		delay: 0.1,
		stagger: 0.1,
		ease: 'power4.out'
	});
};
