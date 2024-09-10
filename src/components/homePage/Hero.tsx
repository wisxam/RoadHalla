import { useRef, useState } from 'react';
// mui
import { Box, Container, Typography, IconButton, Grid } from '@mui/material';
// framer-motion
import { motion, useScroll, useTransform } from 'framer-motion';
// swiper
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// assets
import { jaeyunPopCorn, yumiko } from '../../assets';

import { slideTexts } from '../../data/HeaderData';
import SwiperButtons from '../SwiperButtons';
import LazyBackground from '../LazyBackground';
import LazyImage from '../LazyImage';

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const { scrollY } = useScroll();
	const opacity = useTransform(scrollY, [0, 600], [1, 0]);
	const swiperRef = useRef<SwiperClass | null>(null);

	const currentSlideText = slideTexts[currentSlide].text;

	return (
		<motion.div style={{ opacity }}>
			<LazyBackground
				src={yumiko}
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					minHeight: 'auto',
					backgroundColor: '#1A2130',
					padding: '20px',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundBlendMode: 'overlay',
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
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							md={6}>
							<Box>
								<motion.div style={{ opacity }}>
									<Swiper
										modules={[Autoplay, Navigation, Pagination]}
										spaceBetween={30}
										slidesPerView={1}
										loop={true}
										autoplay={{ delay: 3000, disableOnInteraction: false }}
										onSlideChange={(swiper) =>
											setCurrentSlide(swiper.realIndex)
										}
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
			</LazyBackground>
		</motion.div>
	);
};

export default Hero;
