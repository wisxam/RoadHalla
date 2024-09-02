import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../layout';
import { Error, Show, HomePage } from '../pages';
import AnimatedRoutes from './AnimatedRoutes';
import WeaponLearning from '../pages/WeaponLearning';

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
