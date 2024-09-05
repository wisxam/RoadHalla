import { Box, IconButton } from '@mui/material';
import { SwiperClass } from 'swiper/react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SwiperButtons = ({
	swiperRef,
	primaryVariant,
	secondaryVariant,
	hoverVariant,
}: {
	swiperRef: React.RefObject<SwiperClass>;
	primaryVariant: string;
	secondaryVariant: string;
	hoverVariant: string;
}) => {
	return (
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
					backgroundColor: primaryVariant,
					'&:hover': {
						backgroundColor: hoverVariant,
					},
					'&:active': {
						backgroundColor: primaryVariant,
					},
				}}>
				<KeyboardArrowLeftIcon sx={{ fontSize: 40, color: secondaryVariant }} />
			</IconButton>
			<IconButton
				onClick={() => swiperRef.current?.slideNext()}
				sx={{
					backgroundColor: primaryVariant,
					'&:hover': {
						backgroundColor: hoverVariant,
					},
					'&:active': {
						backgroundColor: hoverVariant,
					},
				}}>
				<KeyboardArrowRightIcon
					sx={{ fontSize: 40, color: secondaryVariant }}
				/>
			</IconButton>
		</Box>
	);
};

export default SwiperButtons;
