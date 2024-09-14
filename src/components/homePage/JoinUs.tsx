import {
	Box,
	Container,
	Grid,
	IconButton,
	Typography,
	Button,
} from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import LazyImage from '../lazy/LazyImage';
import { ulgrimForging } from '../../assets';

const JoinUs = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });

	const slideVariants = {
		hiddenRight: { x: '100vw', opacity: 0 },
		hiddenLeft: { x: '-100vw', opacity: 0 },
		visible: { x: 0, opacity: 1 },
	};

	return (
		<Box
			ref={ref}
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: 'auto',
				backgroundColor: 'rgba(255, 220, 149, 0.2)',
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
					justifyContent='space-between'
					alignItems='center'
					sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
					<Grid
						item
						xs={12}
						md={6}
						sx={{
							display: 'flex',
							justifyContent: { xs: 'center', md: 'flex-start' },
						}}>
						<motion.div
							variants={slideVariants}
							animate={isInView ? 'visible' : 'hiddenLeft'}
							transition={{ type: 'tween', duration: 0.7 }}>
							<IconButton disabled>
								<LazyImage
									src={ulgrimForging}
									loadingStyle='tailChase'
								/>
							</IconButton>
						</motion.div>
					</Grid>
					<Grid
						item
						xs={12}
						md={4}
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
							order: { xs: 1, md: 2 },
						}}>
						<motion.div
							variants={slideVariants}
							animate={isInView ? 'visible' : 'hiddenRight'}
							transition={{ type: 'tween', duration: 0.7 }}>
							<Typography
								variant='h4'
								sx={{
									fontFamily: 'fantasy',
									color: '#ffdc95',
									marginBottom: '16px',
									textShadow: `
                                    -2px -2px 0 #000, 
                                    1px -1px 0 #000,  
                                    -1px 1px 0 #000,   
                                    1px 1px 0 #000`,
								}}>
								What are you waiting for?
							</Typography>
						</motion.div>
						<motion.div
							variants={slideVariants}
							animate={isInView ? 'visible' : 'hiddenRight'}
							transition={{ type: 'tween', duration: 0.7 }}>
							<Button
								variant='contained'
								color='primary'
								sx={{
									backgroundColor: '#000',
									color: '#ffdc95',
									fontWeight: 'bold',
									padding: '10px 20px',
									borderRadius: '30px',
									'&:hover': {
										backgroundColor: '#333',
									},
								}}>
								Join Us
							</Button>
						</motion.div>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
export default JoinUs;
