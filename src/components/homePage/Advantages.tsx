import { Box, Container, Grid, IconButton, Typography } from '@mui/material';
import DiscreteSlider from '../DiscreteSlider';
import { brawlhallaValues } from '../../data/SliderData';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { yumiko } from '../../assets';
import LazyBackground from '../LazyBackground';
import LazyImage from '../LazyImage';

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
					justifyContent='center'>
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
				</Grid>
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
								initial={{ opacity: 0, x: 0 }}
								animate={{ opacity: 1, x: 0 }}
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
		</LazyBackground>
	);
};
export default Advantages;
