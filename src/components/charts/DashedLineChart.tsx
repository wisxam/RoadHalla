import {
	LineChart,
	lineElementClasses,
	markElementClasses,
} from '@mui/x-charts/LineChart';
import { Box } from '@mui/material';
import { chartSeries, xLabels } from './ChartData';

// Data and labels

export default function DashedLineChart() {
	return (
		<Box sx={{ width: { xs: '300px', md: '500px' } }}>
			<LineChart
				height={300}
				series={chartSeries}
				xAxis={[
					{
						scaleType: 'point',
						data: xLabels,
						label: 'Weapons',
						labelStyle: {
							fill: '#ffdc95',
							fontSize: '12px',
							textShadow: `-2px -2px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000`,
						},
					},
				]}
				sx={{
					[`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
						strokeWidth: 2,
					},
					'.MuiLineElement-series-pvId': {
						strokeDasharray: '',
					},
					'.MuiLineElement-series-uvId': {
						strokeDasharray: '3 4 5 2',
					},
					[`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]:
						{
							fill: '#FFF5E1',
						},
					[`& .${markElementClasses.highlighted}`]: {
						stroke: 'none',
					},
				}}
			/>
		</Box>
	);
}
