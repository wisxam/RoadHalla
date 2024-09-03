import { createTheme } from '@mui/material';

import { login } from '../assets';

const theme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			paper: '#1A2130',
		},
		text: {
			primary: '#FFF5E1',
		},
	},
});

const globalStyles = {
	html: {
		height: '100%',
	},
	body: {
		height: '100%',
		backgroundColor: 'black',
		color: theme.palette.text.primary,
		overflowX: 'hidden',
		backgroundImage: `url(${login})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
	},
	'#root': {
		minHeight: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	'*::-webkit-scrollbar': {
		width: '8px',
		height: '8px',
	},
	'*::-webkit-scrollbar-track': {
		background: theme.palette.grey[800],
	},
	'*::-webkit-scrollbar-thumb': {
		backgroundColor: theme.palette.grey[600],
		borderRadius: '4px',
	},
	'*::-webkit-scrollbar-thumb:hover': {
		backgroundColor: theme.palette.grey[500],
	},
};

export { globalStyles, theme };
