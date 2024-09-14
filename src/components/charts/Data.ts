export const weaponsUsed = [
	{
		label: 'Great Sword',
		value: 72.72,
		color: 'orange',
	},
	{
		label: 'Scythe',
		value: 16.38,
	},
	{
		label: 'Katars',
		value: 3.83,
	},
	{
		label: 'Hammer',
		value: 2.42,
	},
	{
		label: 'Lance',
		value: 4.65,
	},
];

export const lessonsRating = [
	{
		london: 59,
		paris: 57,
		newYork: 86,
		seoul: 21,
		videoName: 'Great Sword Journey',
	},
	{
		london: 50,
		paris: 52,
		newYork: 78,
		seoul: 28,
		videoName: 'Road To Diamond',
	},
	{
		london: 47,
		paris: 53,
		newYork: 106,
		seoul: 41,
		videoName: 'Iron Man Challenge',
	},
	{
		london: 54,
		paris: 56,
		newYork: 92,
		seoul: 73,
		videoName: 'Battle Boots Tutorial',
	},
];

export const valueFormatter = (item: { value: number }) => `${item.value}%`;
