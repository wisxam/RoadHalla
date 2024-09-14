import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { weaponsUsed, valueFormatter } from './Data';
import { Box, Typography } from '@mui/material';

export default function PieArcLabel() {
	return (
		<Box
			sx={{
				width: { xs: '372px', md: '400px' },
				height: '200px',
				position: 'relative',
			}}>
			<Typography
				variant='h6'
				sx={{
					position: 'absolute',
					mt: '-30px',
					left: '20%',
					fontFamily: 'fantasy',
					color: '#ffdc95',
					textShadow: `
                    -2px -2px 0 #000, 
            		1px -1px 0 #000,  
                    -1px 1px 0 #000,   
                    1px 1px 0 #000`,
				}}>
				Most Weapons Used:
			</Typography>
			<PieChart
				series={[
					{
						arcLabel: (item) => `${item.value}%`,
						arcLabelMinAngle: 35,
						arcLabelRadius: '60%',
						highlightScope: { fade: 'global', highlight: 'item' },
						...data,
					},
				]}
				sx={{
					[`& .${pieArcLabelClasses.root}`]: {
						fontWeight: 'bold',
					},
				}}
			/>
		</Box>
	);
}

const data = {
	data: weaponsUsed,
	valueFormatter,
};
