import { Box, Container, Grid, IconButton, Typography } from '@mui/material';
import DiscreteSlider from '../DiscreteSlider';
import { brawlhallaValues } from '../../data/sliderData';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Advantages = () => {
	const [currentSliderValue, setCurrentSliderValue] = useState(
		brawlhallaValues[0].value || 0
	);

	const handleSliderChange = (newValue: number) => {
		setCurrentSliderValue(newValue);
	};

	const currentSlider = brawlhallaValues.find(
		(slider) => slider.value === currentSliderValue
	);

	return (
		<Box
			sx={{
				display: 'flex',
				minHeight: 'auto',
				padding: '20px',
				color: 'white',
				backgroundColor: '#FFF5E1',
			}}>
			<Container maxWidth='lg'>
				<Grid
					container
					justifyContent='center'>
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
                            1px 1px 0 #000`,
						}}>
						LearnHalla will ensure:
					</Typography>
				</Grid>
				<Grid
					container
					justifyContent='center'
					sx={{ mt: '40px' }}>
					<Grid
						item
						xs={12}
						sm={8}>
						<DiscreteSlider onChange={handleSliderChange} />
					</Grid>
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
								initial={{ opacity: 0, x: -10 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.5 }}
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								<IconButton
									disabled
									sx={{
										fontSize: '50px',
										marginBottom: '20px',
										padding: 0,
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}>
									<Box
										component='img'
										src={currentSlider?.icon}
										alt={currentSlider?.label || 'Slide'}
										sx={{
											width: 'auto',
											height: '100%',
											objectFit: 'cover',
											borderRadius: '12px',
										}}
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
