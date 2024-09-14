import { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { zoomies, tailChase } from 'ldrs';

tailChase.register();
zoomies.register();

const LazyImage = ({
	src,
	alt = '',
	sx,
	loadingStyle = '',
}: {
	src: string;
	alt?: string;
	sx?: React.CSSProperties;
	loadingStyle?: string;
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
		<Box sx={{ ...sx }}>
			{!loaded && (
				<Box sx={{ ...sx }}>
					{loadingStyle === 'zoomies' && (
						<l-zoomies
							size='40'
							speed='1.75'
							color='#ADD8E6'
						/>
					)}
					{loadingStyle === 'tailChase' && (
						<l-tail-chase
							size='40'
							bg-opacity='0.1'
							speed='1.75'
							color='#ADD8E6'
						/>
					)}
				</Box>
			)}
			<img
				ref={imgRef}
				src={loaded ? src : ''}
				alt={alt}
				style={{ ...sx }}
			/>
		</Box>
	);
};

export default LazyImage;
