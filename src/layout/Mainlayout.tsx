import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components/common';
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
