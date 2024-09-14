import { useEffect, useRef, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';

const LazyBackground = ({
	src,
	sx,
	children = null,
}: {
	src: string;
	sx?: React.CSSProperties;
	children?: React.ReactNode;
}) => {
	const [loaded, setLoaded] = useState(false);
	const bgRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const img = new Image();
						img.src = src;
						img.onload = () => setLoaded(true);
						observer.unobserve(entry.target);
					}
				});
			},
			{ rootMargin: '100px' }
		);

		if (bgRef.current) {
			observer.observe(bgRef.current);
		}
		return () => observer.disconnect();
	}, [src]);

	return (
		<Box
			ref={bgRef}
			sx={{
				...sx,
				backgroundImage: loaded ? `url(${src})` : 'none',
			}}>
			{!loaded && (
				<Box
					sx={{
						...sx,
					}}>
					<CircularProgress />
				</Box>
			)}
			{children}
		</Box>
	);
};

export default LazyBackground;
