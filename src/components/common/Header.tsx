import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { motion, useScroll, useTransform } from 'framer-motion';
import IconButton from '@mui/material/IconButton';
import { weapons } from '../../data/headerData';
import { temporaryLogoNoBg } from '../../assets';

const Header = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [mobileMenuOpen, setMobileMenuOpen] =
		React.useState<null | HTMLElement>(null);
	const navigate = useNavigate();

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
		setMobileMenuOpen(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMenuOpen(null);
	};

	const { scrollY } = useScroll();
	const opacity = useTransform(scrollY, [0, 300], [1, 0]);
	const pointerEvents = useTransform(opacity, [0, 1], ['none', 'auto']);

	return (
		<motion.div
			style={{
				opacity,
				pointerEvents,
				position: 'sticky',
				top: 0,
			}}>
			<AppBar
				sx={{
					position: 'sticky',
					top: 0,
					boxShadow: 10,
					background: '#1A2130',
					transition: 'opacity 0.5s ease-in-out',
					height: '60px',
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}>
				<Container maxWidth='xl'>
					<Toolbar
						disableGutters
						sx={{
							justifyContent: { xs: 'space-between', md: 'space-between' },
							alignItems: 'center',
						}}>
						<IconButton
							edge='start'
							color='inherit'
							aria-label='menu'
							sx={{ display: { xs: 'block', md: 'none' } }}
							onClick={handleMobileMenuOpen}>
							<span>Menu</span>
						</IconButton>
						<Link to='/'>
							<img
								src={temporaryLogoNoBg}
								title='Learn Halla'
								className='h-13 w-14'
								alt='Logo'
							/>
						</Link>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'none', md: 'flex' },
								justifyContent: 'center',
								alignItems: 'center',
								gap: 2,
							}}>
							<Button
								onClick={handleClick}
								className='font-bold translate-x-10 hover:font-black hover:text-[#9AC8CD]'
								sx={{ fontSize: 23, color: '#FFF5E1' }}>
								Weapons
							</Button>
							<Menu
								anchorEl={anchorEl}
								open={Boolean(anchorEl)}
								onClose={handleClose}
								sx={{
									'& .MuiPaper-root': {
										backgroundColor: '#1A2130',
										color: '#FFF5E1',
										maxHeight: 250,
									},
								}}>
								{weapons.map((option) => (
									<MenuItem
										key={option.name}
										onClick={() => {
											handleClose();
											navigate(option.link);
										}}
										sx={{
											display: 'flex',
											justifyContent: 'space-between',
											alignItems: 'center',
											'&:hover': { backgroundColor: '#C80036' },
											padding: '8px 16px',
											opacity: opacity.get(),
											transition: 'opacity 0.5s ease-in-out',
										}}>
										<span>{option.name}</span>
										<img
											src={option.icon}
											alt={option.name}
											style={{ width: '24px', marginLeft: '8px' }}
										/>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<Menu
							anchorEl={mobileMenuOpen}
							open={Boolean(mobileMenuOpen)}
							onClose={handleMobileMenuClose}
							sx={{
								display: { xs: 'block', md: 'none' },
								'& .MuiPaper-root': {
									backgroundColor: '#1A2130',
									color: '#FFF5E1',
									maxHeight: 250,
								},
							}}>
							{weapons.map((option) => (
								<MenuItem
									key={option.name}
									onClick={() => {
										handleMobileMenuClose();
										navigate(option.link);
									}}
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										'&:hover': { backgroundColor: '#C80036' },
										padding: '8px 16px',
										opacity: opacity.get(),
										transition: 'opacity 0.5s ease-in-out',
									}}>
									<span>{option.name}</span>
									<img
										src={option.icon}
										alt={option.name}
										style={{ width: '24px', marginLeft: '8px' }}
									/>
								</MenuItem>
							))}
						</Menu>
					</Toolbar>
				</Container>
			</AppBar>
		</motion.div>
	);
};

export default Header;
