import { useEffect, useRef, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';

const LazyImage = ({
	src,
	alt = '',
	sx,
}: {
	src: string;
	alt?: string;
	sx?: React.CSSProperties;
}) => {
	const [loaded, setLoaded] = useState(false);
	const imgRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const img = imgRef.current;
						if (img) {
							img.src = src;
							img.onload = () => setLoaded(true);
						}
						observer.unobserve(entry.target);
					}
				});
			},
			{ rootMargin: '100px' }
		);

		if (imgRef.current) {
			observer.observe(imgRef.current);
		}

		return () => observer.disconnect();
	}, [src]);

	return (
		<Box
			sx={{
				...sx,
				position: 'relative',
				width: 'auto',
				height: 'auto',
			}}>
			{!loaded && (
				<Box
					sx={{
						...sx,
					}}>
					<CircularProgress />
				</Box>
			)}
			<img
				ref={imgRef}
				src={loaded ? src : ''}
				alt={alt}
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					opacity: loaded ? 1 : 0,
					transition: 'opacity 0.5s ease-in-out',
				}}
			/>
		</Box>
	);
};

export default LazyImage;
