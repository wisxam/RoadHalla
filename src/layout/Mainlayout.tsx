import { Outlet } from 'react-router-dom';
import { Header } from '../components/common';
import { ScrollToTop } from '../components';

const MainLayout = () => {
	return (
		<>
			<Header />
			<ScrollToTop />
			<Outlet />
		</>
	);
};

export default MainLayout;
