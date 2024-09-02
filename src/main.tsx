import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './routes/AppRouter.tsx';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { globalStyles, theme } from './styles/globalStyles.js';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<GlobalStyles styles={globalStyles} />
			<AppRouter />
		</ThemeProvider>
	</StrictMode>
);
