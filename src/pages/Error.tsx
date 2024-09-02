import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';
import { restHereBrawler } from '../assets';

const ErrorPage = () => {
	const error = useRouteError();
	let errorStatus;
	let errorStatusText;

	if (isRouteErrorResponse(error)) {
		errorStatus = error.status;
		errorStatusText = error.statusText;
	} else {
		errorStatus = 404;
		errorStatusText = 'Page Not Found';
	}

	return (
		<div
			className='relative flex items-center justify-center h-screen w-screen bg-cover bg-center'
			style={{ backgroundImage: `url(${restHereBrawler})` }}>
			<div className='absolute top-0 left-0 w-full h-full bg-[#e23e3e22] opacity-0'></div>
			<div className='relative z-10 text-center text-white p-10 hover:opacity-80'>
				<h1 className='font-bold text-[130px] text-[#222]'>{errorStatus}</h1>
				<p className='font-bold text-[50px] text-[#222]'>{errorStatusText}</p>
				<Link
					className='font-medium text-[#0a0000] hover:underline mt-4 block bold'
					to='/'
					replace={true}>
					Rest Here Brawler, you reached a dead end.
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
