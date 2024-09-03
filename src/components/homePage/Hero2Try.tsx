import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import { whyLearnHalla } from '../../data/WhyLearnHallaContent';
import { gentleThatch } from '../../assets';

const Hero2Try = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: 'auto',
				opacity: 0.9,
				padding: '20px',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}>
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
							}}>
							<Swiper
								modules={[Autoplay]}
								spaceBetween={30}
								slidesPerView={1}
								loop={true}>
								{whyLearnHalla.map((slide, index) => (
									<SwiperSlide key={index}>
										<Box
											sx={{
												display: 'flex',
												flexDirection: 'column',
												alignItems: 'center',
												minHeight: 'auto',
												gap: '20px',
											}}>
											<Box
												component='video'
												src={slide.videoUrl}
												controls
												autoPlay
												muted
												playsInline
												loop
												sx={{
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
													variant='h5'
													sx={{ marginTop: { xs: 'auto', md: '40px' } }}>
													{slide.text}
												</Typography>
											</motion.div>
										</Box>
									</SwiperSlide>
								))}
							</Swiper>
						</Box>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						sx={{
							order: { xs: 1, md: 2 },
							textAlign: { xs: 'center', md: 'left' },
						}}>
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
								src={gentleThatch}
								alt='Slide 2'
								sx={{
									width: 'auto',
									height: '100%',
									objectFit: 'cover',
									borderRadius: '12px',
								}}
							/>
						</IconButton>
						<Box>
							<Typography
								variant='h2'
								gutterBottom>
								Why LearnHalla?
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Hero2Try;
