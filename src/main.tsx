import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './routes/AppRouter.tsx';
import { GlobalStyles } from '@mui/material';
import { globalStyles } from './styles/globalStyles.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<GlobalStyles styles={globalStyles} />
		<AppRouter />
	</StrictMode>
);
