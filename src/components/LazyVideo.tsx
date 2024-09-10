import React, { useEffect, useImperativeHandle, useRef } from 'react';
import { Box } from '@mui/material';

interface LazyVideoProps {
	src: string;
	alt?: string;
	sx?: React.CSSProperties;
	controls?: boolean;
}

const LazyVideo = React.forwardRef<HTMLVideoElement, LazyVideoProps>(
	({ src, sx, controls = false }, ref) => {
		const videoRef = useRef<HTMLVideoElement | null>(null);

		useEffect(() => {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							const video = videoRef.current;
							if (video) {
								video.src = src;
							}
							observer.unobserve(entry.target);
						}
					});
				},
				{ rootMargin: '100px' }
			);

			if (videoRef.current) {
				observer.observe(videoRef.current);
			}

			return () => observer.disconnect();
		}, [src]);

		useImperativeHandle(ref, () => videoRef.current as HTMLVideoElement);

		return (
			<Box
				sx={{
					...sx,
					position: 'relative',
					width: 'auto',
					height: 'auto',
				}}>
				<video
					ref={videoRef}
					controls={controls}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						transition: 'opacity 0.5s ease-in-out',
						borderRadius: '12px',
					}}
					playsInline
					loop
					muted>
					<source
						src={src}
						type='video/mp4'
					/>
				</video>
			</Box>
		);
	}
);

export default LazyVideo;
