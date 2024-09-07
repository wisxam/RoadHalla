import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { brawlhallaValues } from '../data/sliderData';

export default function DiscreteSlider({
	onChange,
}: {
	onChange: (value: number) => void;
}) {
	return (
		<Box
			sx={{
				width: { xs: 'auto', md: '800px' },
			}}>
			<Slider
				onChange={(_, newValue) =>
					onChange(Array.isArray(newValue) ? newValue[0] : newValue)
				}
				step={null}
				marks={brawlhallaValues}
				min={0}
				max={100}
				sx={{
					'& .MuiSlider-thumb': {
						backgroundColor: '#ffdc95',
						border: '2px solid #000',
						width: '24px',
						height: '24px',
						'&:hover': {
							backgroundColor: '#f5b951',
						},
					},
					'& .MuiSlider-markLabel': {
						color: '#ffdc95',
						fontSize: '16px',
						fontWeight: 'bold',
						textShadow: `
                        -2px -2px 0 #000, 
                        1px -1px 0 #000,  
                        -1px 1px 0 #000,   
                        1px 1px 0 #000     
                      `,
					},
					'& .MuiSlider-track': {
						color: '#1A2130',
					},
					'& .MuiSlider-rail': {
						color: '#C80036',
					},
				}}
			/>
		</Box>
	);
}
