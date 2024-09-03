import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../layout';
import { Error, Show, HomePage } from '../pages';
import WeaponLearning from '../pages/WeaponLearning';
import AnimatedRoutes from './AnimatedRoutes';

const router = createBrowserRouter([
	{
		element: <AnimatedRoutes />,
		errorElement: <Error />,
		children: [
			{
				element: <MainLayout />,
				children: [
					{ path: '/', element: <HomePage /> },
					{ path: '/show', element: <Show /> },
					{ path: 'learn/*', element: <WeaponLearning /> },
				],
			},
		],
	},
]);

const AppRouter = () => {
	return <RouterProvider router={router} />;
};

export default AppRouter;
