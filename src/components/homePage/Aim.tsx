import { Box, Container, Grid, Typography } from '@mui/material';
import { useRef } from 'react';
import { PieActiveArc, HorizontalBars, DashedLineChart } from '../charts';
import { motion, useInView } from 'framer-motion';

const Aim = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });

	const slideVariants = {
		hiddenRight: { x: '100px', opacity: 0 },
		hiddenLeft: { x: '-100px', opacity: 0 },
		hiddenTop: { y: '-100px', opacity: 0 },
		hiddenBottom: { y: '100px', opacity: 0 },
		visibleY: { y: 0, opacity: 1 },
		visibleX: { x: 0, opacity: 1 },
	};
	return (
		<Box
			ref={ref}
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: 'auto',
				backgroundColor: '#FFF5E1',
				padding: '20px',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundBlendMode: 'overlay',
			}}>
			<Container maxWidth='lg'>
				<motion.div
					variants={slideVariants}
					animate={isInView ? 'visible' : 'hiddenTop'}
					transition={{ type: 'tween', duration: 0.7 }}>
					<Typography
						variant='h4'
						sx={{
							textAlign: 'center',
							fontFamily: 'fantasy',
							marginTop: { xs: 'auto', md: '20px' },
							color: '#ffdc95',
							textShadow: `
                                    -2px -2px 0 #000, 
                                    1px -1px 0 #000,  
                                    -1px 1px 0 #000,   
                                    1px 1px 0 #000`,
						}}>
						Using statistic tools to seize the best learning curve
					</Typography>
				</motion.div>
				<Box sx={{ mt: '40px' }}>
					<Grid
						container
						spacing={8}
						alignItems='stretch'>
						<Grid
							item
							xs={12}
							sm={6}>
							<Box sx={{ width: '100%', maxWidth: '500px' }}>
								<motion.div
									variants={slideVariants}
									animate={isInView ? 'visibleX' : 'hiddenLeft'}
									transition={{ type: 'tween', duration: 0.7 }}>
									<DashedLineChart />
								</motion.div>
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							sm={6}>
							<Box
								sx={{
									width: '100%',
									maxWidth: '500px',
									mt: '30px',
									mb: '30px',
								}}>
								<motion.div
									variants={slideVariants}
									animate={isInView ? 'visibleX' : 'hiddenRight'}
									transition={{ type: 'tween', duration: 0.7 }}>
									<PieActiveArc />
								</motion.div>
							</Box>
						</Grid>
					</Grid>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<Box sx={{ width: '100%', maxWidth: '500px' }}>
						<motion.div
							variants={slideVariants}
							animate={isInView ? 'visibleY' : 'hiddenBottom'}
							transition={{ type: 'tween', duration: 0.7 }}>
							<HorizontalBars />
						</motion.div>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Aim;
