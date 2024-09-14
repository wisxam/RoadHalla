import { useRef, useState } from 'react';
// mui
import { Box, Container, Typography, IconButton, Grid } from '@mui/material';
// framer-motion
import { motion, useInView } from 'framer-motion';
// import { useScroll, useTransform } from 'framer-motion';
// swiper
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// assets
import { jaeyunPopCorn } from '../../assets';

import { slideTexts } from '../../data/HeaderData';
import SwiperButtons from '../SwiperButtons';
import LazyImage from '../lazy/LazyImage';

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	// const { scrollY } = useScroll();
	// const opacity = useTransform(scrollY, [0, 600], [1, 0]);
	const swiperRef = useRef<SwiperClass | null>(null);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false, margin: '-100px' });
	const currentSlideText = slideTexts[currentSlide].text;

	const slideVariants = {
		hiddenRight: {
			x: '100vw',
			opacity: 0,
			scale: 0.8,
			rotate: 20,
			transition: { type: 'tween', duration: 0.7 },
		},
		hiddenLeft: {
			x: '-100vw',
			opacity: 0,
			scale: 0.8,
			rotate: -20,
			transition: { type: 'tween', duration: 0.7 },
		},
		visible: {
			x: 0,
			opacity: 1,
			scale: 1,
			rotate: 0,
			transition: { type: 'tween', duration: 0.7 },
		},
	};

	return (
		<Box
			ref={ref}
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: 'auto',
				backgroundColor: 'rgba(26, 33, 48, 0.5)',
				padding: '20px',
			}}>
			<Container maxWidth='lg'>
				<Grid
					container
					spacing={4}
					alignItems='center'
					justifyContent='center'>
					<Grid
						item
						xs={12}
						md={6}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: { xs: 'center', md: 'flex-start' },
						}}>
						<Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
							<motion.div
								variants={slideVariants}
								animate={isInView ? 'visible' : 'hiddenLeft'}>
								<IconButton
									disabled
									sx={{
										fontSize: '50px',
										marginBottom: '20px',
										cursor: 'default',
										padding: 0,
									}}>
									<LazyImage
										src={jaeyunPopCorn}
										alt='Slide 2'
										sx={{
											width: 'auto',
											height: '100%',
											objectFit: 'cover',
											borderRadius: '12px',
										}}
										loadingStyle='tailChase'
									/>
								</IconButton>
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
									LearnHalla
								</Typography>
								<motion.div
									key={currentSlideText}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5 }}>
									<Typography
										variant='h5'
										paragraph
										sx={{
											fontFamily: 'fantasy',
											color: '#ffdc95',
											textShadow: `
												-2px -6px 0 #000, 
												1px -1px 0 #000,  
												-1px 1px 0 #000,   
												1px 1px 0 #000     
												`,
											display: '-webkit-box',
											WebkitLineClamp: 2,
										}}>
										{currentSlideText}
									</Typography>
								</motion.div>
							</motion.div>
						</Box>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}>
						<Box>
							<motion.div
								variants={slideVariants}
								animate={isInView ? 'visible' : 'hiddenRight'}>
								<Swiper
									modules={[Autoplay, Navigation, Pagination]}
									spaceBetween={30}
									slidesPerView={1}
									loop={true}
									autoplay={{ delay: 3000, disableOnInteraction: false }}
									onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
									pagination={{
										clickable: true,
										renderBullet: (_, className) => {
											return `<span class="${className}" style="background-color: #FFF5E1; width: 12px; height: 12px; margin: 4px; border-radius: 50%;"></span>`;
										},
									}}
									onSwiper={(swiper) => {
										swiperRef.current = swiper;
									}}>
									{slideTexts.map((slide) => (
										<SwiperSlide key={slide.text}>
											<Box
												component='img'
												src={slide.image}
												alt={slide.text}
												sx={{
													width: '100%',
													height: '100%',
													objectFit: 'cover',
													borderRadius: '12px',
												}}
											/>
										</SwiperSlide>
									))}
								</Swiper>
								<SwiperButtons
									swiperRef={swiperRef}
									primaryVariant='#1A2130'
									secondaryVariant='#FFF5E1'
									hoverVariant='#5F5959'
								/>
							</motion.div>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Hero;
