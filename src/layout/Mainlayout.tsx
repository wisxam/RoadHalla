import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components/common';

const MainLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default MainLayout;
