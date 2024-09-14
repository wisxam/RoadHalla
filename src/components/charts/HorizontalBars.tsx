import { BarChart } from '@mui/x-charts/BarChart';
import { lessonsRating } from './Data';
import { Box } from '@mui/material';

const chartSetting = {
	xAxis: [
		{
			label: "⭐'s for lessons",
			labelStyle: {
				fill: '#ffdc95',
				fontSize: '12px',
				textShadow: `-1px -2px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000`,
			},
		},
	],
};

const valueFormatter = (value: number | null) => `${value}⭐`;

export default function HorizontalBars() {
	return (
		<Box sx={{ width: { xs: '400px', md: '600px' }, height: '400px' }}>
			<BarChart
				dataset={lessonsRating}
				yAxis={[{ scaleType: 'band', dataKey: 'videoName' }]}
				series={[
					{ dataKey: 'seoul', label: 'Top Rated Videos', valueFormatter },
				]}
				layout='horizontal'
				margin={{ left: 130 }}
				{...chartSetting}
			/>
		</Box>
	);
}
