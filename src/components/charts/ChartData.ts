export const uData = [2000, 1300, 3200, 2564, 2130, 1534, 1464];
export const pData = [1200, 954, 1400, 1500, 1900, 942, 1000];

export const xLabels = [
	'Greatsword',
	'Scythe',
	'Katars',
	'Hammer',
	'Blasters',
	'Lance',
	'Sword',
];

export const chartSeries = [
	{
		data: uData,
		label: 'Weekly Dmg Per Game',
		id: 'pvId',
		color: 'blue',
	},
	{
		data: pData,
		label: 'Previous Week Dmg',
		id: 'uvId',
		color: 'black',
	},
];
