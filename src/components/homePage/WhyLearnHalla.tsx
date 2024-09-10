import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { motion, useTransform, useScroll } from 'framer-motion';
import 'swiper/css';
import { whyLearnHalla } from '../../data/WhyLearnHallaContent';
import { gentleThatch } from '../../assets';
import { useRef, useState, useEffect } from 'react';
import SwiperButtons from '../SwiperButtons';
import LazyVideo from '../LazyVideo'; // Import the LazyVideo component
import LazyImage from '../LazyImage';

const WhyLearnHalla = () => {
	const videoRefs = useRef<HTMLVideoElement[]>([]);
	const swiperRef = useRef<SwiperClass | null>(null);
	const [videoPlaying, setVideoPlaying] = useState(whyLearnHalla[0].videoUrl);
	const [isBackgroundAnimating, setIsBackgroundAnimating] = useState(false);
	const { scrollY } = useScroll();
	const opacity = useTransform(scrollY, [800, 1900], [1, 0]);

	useEffect(() => {
		const handleSlideChange = (swiper: SwiperClass) => {
			const currentSlideIndex = swiper.realIndex % whyLearnHalla.length;
			setIsBackgroundAnimating(true);

			videoRefs.current.forEach((video) => {
				if (video) {
					video.pause();
					video.muted = true;
				}
			});

			setTimeout(() => {
				setVideoPlaying(whyLearnHalla[currentSlideIndex].videoUrl);
				setIsBackgroundAnimating(false);
			}, 300);
		};

		if (swiperRef.current) {
			swiperRef.current.on('slideChange', handleSlideChange);
		}
	}, [videoPlaying]);

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: 'auto',
				padding: '20px',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				position: 'relative',
				overflow: 'hidden',
			}}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: isBackgroundAnimating ? 0 : 1 }}
				transition={{ duration: 0.5 }}
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					overflow: 'hidden',
					zIndex: -1,
				}}>
				<video
					src={videoPlaying}
					autoPlay
					muted
					playsInline
					loop
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						filter: 'blur(10px)',
					}}
				/>
			</motion.div>
			<Container maxWidth='lg'>
				<Grid
					container
					spacing={4}
					alignItems='center'
					sx={{
						flexDirection: { xs: 'column', md: 'row' },
					}}>
					<Grid
						item
						xs={12}
						md={6}
						sx={{
							order: { xs: 2, md: 1 },
						}}>
						<Box
							sx={{
								width: '100%',
								height: { xs: 'auto', md: 'auto' },
								overflow: 'hidden',
								mt: { md: '50px' },
								mb: 'auto',
							}}>
							<motion.div style={{ opacity }}>
								<Swiper
									slidesPerView={1}
									loop={true}
									onSwiper={(swiper) => {
										swiperRef.current = swiper;
									}}>
									{whyLearnHalla.map((slide, index) => (
										<SwiperSlide key={index}>
											<Box
												sx={{
													display: 'flex',
													flexDirection: 'column',
													alignItems: 'center',
													minHeight: 'auto',
													gap: '20px',
													padding: '5px',
												}}>
												<LazyVideo
													ref={(el) => (videoRefs.current[index] = el!)}
													src={slide.videoUrl}
													controls
													sx={{
														height: 'auto',
														width: '100%',
														maxHeight: '250px',
														borderRadius: '12px',
													}}
												/>
												<motion.div
													initial={{ opacity: 0, x: -20 }}
													animate={{ opacity: 1, x: 0 }}
													transition={{ duration: 0.5 }}>
													<Typography
														variant='h4'
														sx={{
															fontFamily: 'fantasy',
															marginTop: { xs: 'auto', md: '20px' },
															mb: 'auto',
															color: '#ffdc95',
															textShadow: `
																-2px -2px 0 #000, 
																1px -1px 0 #000,  
																-1px 1px 0 #000,   
																1px 1px 0 #000     
															`,
														}}>
														{slide.text}
													</Typography>
												</motion.div>
											</Box>
										</SwiperSlide>
									))}
								</Swiper>
								<Box sx={{ mt: 'auto' }}>
									<SwiperButtons
										swiperRef={swiperRef}
										primaryVariant='#1A2130'
										secondaryVariant='#FFF5E1'
										hoverVariant='#5F5959'
									/>
								</Box>
							</motion.div>
						</Box>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						sx={{
							order: { xs: 1, md: 2 },
							textAlign: 'center',
						}}>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: 2,
							}}>
							<motion.div style={{ opacity }}>
								<IconButton
									disabled
									sx={{
										marginBottom: '10px',
										cursor: 'default',
										padding: 0,
										width: '50%',
									}}>
									<LazyImage
										src={gentleThatch}
										sx={{
											width: '100%',
											height: '100%',
											objectFit: 'cover',
											borderRadius: '12px',
										}}
									/>
								</IconButton>
								<Box>
									<Typography
										variant='h2'
										gutterBottom
										sx={{
											fontFamily: 'fantasy',
											color: '#ffdc95',
											textShadow: `
												-2px -6px 0 #000, 
												1px -1px 0 #000,  
												-1px 1px 0 #000,   
												1px 1px 0 #000     
											`,
										}}>
										Why LearnHalla?
									</Typography>
								</Box>
							</motion.div>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default WhyLearnHalla;
