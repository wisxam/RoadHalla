import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ScrollToTop } from '../components';

const pageVariants = {
	initial: {
		opacity: 0,
		x: 20, // Slide in from the right
	},
	enter: {
		opacity: 1,
		x: 0, // Slide to the center
	},
	exit: {
		opacity: 0,
		x: -20, // Slide out to the left
	},
};

const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence mode='wait'>
			<motion.div
				key={location.pathname}
				initial='initial'
				animate='enter'
				exit='exit'
				variants={pageVariants}
				transition={{ duration: 0.5 }} // Adjust duration to make sure animations are smooth
				style={{ position: 'relative', width: '100%', height: '100%' }} // Ensure the div occupies space correctly
			>
				<ScrollToTop />
				<Outlet />
			</motion.div>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
