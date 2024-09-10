import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../layout';
const HomePage = lazy(() => import('../pages/HomePage'));
const AnimatedRoutes = lazy(() => import('./AnimatedRoutes'));
const Error = lazy(() => import('../pages/Error'));
import { Show } from '../pages';
import WeaponLearning from '../pages/WeaponLearning';
import { Box, CircularProgress } from '@mui/material';

const router = createBrowserRouter([
	{
		element: (
			<Suspense
				fallback={
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<CircularProgress />
					</Box>
				}>
				<AnimatedRoutes />
			</Suspense>
		),
		errorElement: (
			<Suspense fallback='loading please wait...'>
				<Error />
			</Suspense>
		),
		children: [
			{
				element: <MainLayout />,
				children: [
					{
						path: '/',
						element: (
							<Suspense fallback={<CircularProgress />}>
								<HomePage />
							</Suspense>
						),
					},
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
