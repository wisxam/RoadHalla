import { useRef, useState } from 'react';
// mui
import { Box, Container, Typography, IconButton, Grid } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// framer-motion
import { motion, useScroll, useTransform } from 'framer-motion';
// swiper
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// assets
import {
	allWeaponsGoldforged,
	jaeyunPopCorn,
	login,
	movementBrawlhalla,
	trueCombos,
} from '../../assets';

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const { scrollY } = useScroll();
	const opacity = useTransform(scrollY, [0, 500], [1, 0]);
	const swiperRef = useRef<SwiperClass | null>(null);

	const slideTexts = [
		'Learn and master all the available weapons with ease.',
		'Discover the true combos and be the king of your platform.',
		'Master the movement techniques to ensure the best performance over your opponent.',
	];

	const currentSlideText = slideTexts[currentSlide];

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: 'auto',
				backgroundColor: '#1A2130',
				color: '#FFF5E1',
				opacity: 0.9,
				padding: '20px',
				backgroundImage: `url(${login})`,
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
							<motion.div style={{ opacity }}>
								<IconButton
									disabled
									sx={{
										fontSize: '50px',
										marginBottom: '20px',
										cursor: 'default',
										padding: 0,
									}}>
									<Box
										component='img'
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
									gutterBottom>
									LearnHalla
								</Typography>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5 }}
								style={{ opacity: opacity }}>
								<Typography
									variant='h5'
									paragraph>
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
									onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
									pagination={{
										clickable: true,
										renderBullet: (_, className) => {
											return `<span class="${className}" style="background-color: black; width: 12px; height: 12px; margin: 4px; border-radius: 50%;"></span>`;
										},
									}}
									onSwiper={(swiper) => {
										swiperRef.current = swiper;
									}}>
									<SwiperSlide>
										<Box
											component='img'
											src={allWeaponsGoldforged}
											alt='Slide 1'
											sx={{
												width: '100%',
												height: '100%',
												objectFit: 'cover',
												borderRadius: '12px',
											}}
										/>
									</SwiperSlide>
									<SwiperSlide>
										<Box
											component='img'
											src={movementBrawlhalla}
											alt='Slide 2'
											sx={{
												width: '100%',
												height: '100%',
												objectFit: 'cover',
												borderRadius: '12px',
											}}
										/>
									</SwiperSlide>
									<SwiperSlide>
										<Box
											component='img'
											src={trueCombos}
											alt='Slide 3'
											sx={{
												width: '100%',
												height: '100%',
												objectFit: 'cover',
												borderRadius: '12px',
											}}
										/>
									</SwiperSlide>
								</Swiper>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
										marginTop: '20px',
										// '@media (max-width: 600px)': {
										// 	justifyContent: 'space-around',
										// },
									}}>
									<IconButton
										onClick={() => swiperRef.current?.slidePrev()}
										sx={{
											'&:hover': {
												backgroundColor: '#1A2130',
											},
											'&:active': {
												backgroundColor: '#FFF5E1',
											},
										}}>
										<KeyboardArrowLeftIcon
											sx={{ fontSize: 40, color: '#FFF5E1' }}
										/>
									</IconButton>
									<IconButton
										onClick={() => swiperRef.current?.slideNext()}
										sx={{
											'&:hover': {
												backgroundColor: '#1A2130',
											},
											'&:active': {
												backgroundColor: '#FFF5E1',
											},
										}}>
										<KeyboardArrowRightIcon
											sx={{ fontSize: 40, color: '#FFF5E1' }}
										/>
									</IconButton>
								</Box>
							</motion.div>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Hero;
