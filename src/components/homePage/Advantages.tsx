import { Box, Container, Grid, IconButton, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import DiscreteSlider from '../DiscreteSlider';
import { brawlhallaValues } from '../../data/SliderData';
import LazyImage from '../lazy/LazyImage';

const Advantages = () => {
	const [currentSliderValue, setCurrentSliderValue] = useState(
		brawlhallaValues[0].value || 0
	);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '0px' });

	const handleSliderChange = (newValue: number) => {
		setCurrentSliderValue(newValue);
	};

	const currentSlider = brawlhallaValues.find(
		(slider) => slider.value === currentSliderValue
	);

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
				<Typography
					variant='h4'
					sx={{
						textAlign: 'center',
						fontFamily: 'fantasy',
						marginTop: { xs: 'auto', md: '20px' },
						mb: 'auto',
						color: '#ffdc95',
						textShadow: `
                            -2px -2px 0 #000, 
                            1px -1px 0 #000,  
                            -1px 1px 0 #000,   
                            1px 1px 0 #000`,
					}}>
					LearnHalla will ensure:
				</Typography>

				<Grid
					container
					justifyContent='center'
					sx={{ mt: '40px' }}>
					<DiscreteSlider onChange={handleSliderChange} />
					<Grid
						container
						direction='column'
						alignItems='center'
						justifyContent='center'
						sx={{ mt: '20px' }}>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								width: '100%',
							}}>
							<motion.div
								key={currentSliderValue}
								initial={{ opacity: 0, x: 50 }}
								animate={
									isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
								}
								transition={{ duration: 0.7 }}
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								<IconButton
									disabled
									sx={{
										marginBottom: '20px',
										padding: 0,
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										height: 130,
									}}>
									<LazyImage
										src={currentSlider?.icon || ''}
										alt={currentSlider?.label || 'Slide'}
										sx={{
											width: 'auto',
											height: '100%',
											objectFit: 'cover',
											borderRadius: '12px',
										}}
										loadingStyle='zoomies'
									/>
								</IconButton>
								<Typography
									variant='h5'
									sx={{
										fontFamily: 'fantasy',
										color: '#ffdc95',
										textAlign: 'center',
										textShadow: `
                                        -2px -2px 0 #000, 
                                        1px -1px 0 #000,  
                                        -1px 1px 0 #000,   
                                        1px 1px 0 #000`,
									}}>
									{currentSlider?.explanation}
								</Typography>
							</motion.div>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Advantages;
