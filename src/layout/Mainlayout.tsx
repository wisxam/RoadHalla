import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components/common';
import { ScrollToTop } from '../components';

const MainLayout = () => {
	return (
		<>
			<Header />
			<ScrollToTop />
			<Outlet />
			<Footer />
		</>
	);
};

export default MainLayout;
