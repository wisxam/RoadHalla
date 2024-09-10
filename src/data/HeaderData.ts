import {
	axeIcon,
	battlebootsIcon,
	blastersIcon,
	bowIcon,
	cannonIcon,
	gauntletsIcon,
	greatswordIcon,
	hammerIcon,
	katarsIcon,
	orbIcon,
	rocketlanceIcon,
	scytheIcon,
	spearIcon,
	swordIcon,
} from '../assets/weaponIndex';

import {
	allWeaponsGoldforged,
	movementBrawlhalla,
	trueCombos,
} from '../assets';

export const weapons = [
	{ name: 'Axe', icon: axeIcon, link: '/learn/axe' },
	{ name: 'Battle Boots', icon: battlebootsIcon, link: '/learn/battleboots' },
	{ name: 'Blasters', icon: blastersIcon, link: '/learn/blasters' },
	{ name: 'Bow', icon: bowIcon, link: '/learn/bow' },
	{ name: 'Cannon', icon: cannonIcon, link: '/learn/cannon' },
	{ name: 'Gauntlets', icon: gauntletsIcon, link: '/learn/gauntlets' },
	{ name: 'Greatsword', icon: greatswordIcon, link: '/learn/greatsword' },
	{ name: 'Hammer', icon: hammerIcon, link: '/learn/hammer' },
	{ name: 'Katars', icon: katarsIcon, link: '/learn/katars' },
	{ name: 'Orb', icon: orbIcon, link: '/learn/orb' },
	{ name: 'Rocket Lance', icon: rocketlanceIcon, link: '/learn/rocketlance' },
	{ name: 'Scythe', icon: scytheIcon, link: '/learn/scythe' },
	{ name: 'Spear', icon: spearIcon, link: '/learn/spear' },
	{ name: 'Sword', icon: swordIcon, link: '/learn/sword' },
];

export const slideTexts = [
	{
		text: 'Learn and master all the available weapons till perfection with ease.',
		image: allWeaponsGoldforged,
	},
	{
		text: 'Discover the true combos and be the king of your platform.',
		image: movementBrawlhalla,
	},
	{
		text: 'Master the movement techniques to ensure the best performance over your opponent.',
		image: trueCombos,
	},
];
