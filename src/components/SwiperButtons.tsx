import { Box, Button } from '@mui/material';
import { useSwiper } from 'swiper/react';

const SwiperButtons = () => {
	const swiper = useSwiper();

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				marginTop: 'auto',
				marginBottom: 'auto',
				margin: '20px',
				gap: '20px',
			}}>
			<Button onClick={() => swiper.slidePrev()}>Left</Button>
			<Button onClick={() => swiper.slideNext()}>Right</Button>
		</Box>
	);
};

export default SwiperButtons;
