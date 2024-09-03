import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ScrollToTop } from '../components';
import { Footer } from '../components/common';

const pageVariants = {
	initial: {
		opacity: 0,
		x: 20,
	},
	enter: {
		opacity: 1,
		x: 0,
	},
	exit: {
		opacity: 0,
		x: -20,
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
				transition={{ duration: 0.5 }}
				style={{ position: 'relative', width: '100%', height: '100%' }}>
				<ScrollToTop />
				<Outlet />
			</motion.div>
			<Footer />
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
