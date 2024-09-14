// import { useLocation } from 'react-router-dom';
// import {
// 	axeIcon,
// 	battlebootsIcon,
// 	blastersIcon,
// 	bowIcon,
// 	cannonIcon,
// 	gauntletsIcon,
// 	greatswordIcon,
// 	hammerIcon,
// 	katarsIcon,
// 	orbIcon,
// 	rocketlanceIcon,
// 	scytheIcon,
// 	spearIcon,
// 	swordIcon,
// } from '../assets/weaponIndex';
import { Box } from '@mui/material';

// const iconMap = {
// 	axe: axeIcon,
// 	battleboots: battlebootsIcon,
// 	blasters: blastersIcon,
// 	bow: bowIcon,
// 	cannon: cannonIcon,
// 	gauntlets: gauntletsIcon,
// 	greatsword: greatswordIcon,
// 	hammer: hammerIcon,
// 	katars: katarsIcon,
// 	orb: orbIcon,
// 	rocketlance: rocketlanceIcon,
// 	scythe: scytheIcon,
// 	spear: spearIcon,
// 	sword: swordIcon,
// };

const WeaponLearning = () => {
	// const location = useLocation();
	// const pathName = location.pathname;
	// const segments = pathName.split('/');
	// const suffix = segments[segments.length - 1] || '';

	// const iconSrc = iconMap[suffix as keyof typeof iconMap] || null;

	return (
		<Box>
			{/* {iconSrc ? (
				<img
					src={iconSrc}
					alt={suffix}
				/>
			) : (
				<p>No icon found for: {suffix}</p>
			)} */}
			weapons
		</Box>
	);
};
export default WeaponLearning;
