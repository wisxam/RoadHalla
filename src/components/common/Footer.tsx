import {
	Box,
	Container,
	Grid,
	Typography,
	IconButton,
	Link,
} from '@mui/material';
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				backgroundColor: '#1A2130',
				color: '#FFF5E1',
				padding: '40px 20px',
				mt: 'auto',
			}}>
			<Container maxWidth='lg'>
				<Grid
					container
					spacing={4}>
					<Grid
						item
						xs={12}
						md={4}>
						<Typography
							variant='h5'
							sx={{ fontWeight: 'bold' }}>
							LearnHalla
						</Typography>
						<Typography
							variant='body2'
							sx={{ mt: 2, lineHeight: 1.8 }}>
							Learn the brawlhalla game and become a pro player.
						</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						md={4}>
						<Typography
							variant='h6'
							sx={{ fontWeight: 'bold', mb: 2 }}>
							Quick Links
						</Typography>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								gap: 1,
							}}>
							<Link
								href='#'
								underline='hover'
								color='inherit'>
								Home
							</Link>
							<Link
								href='#'
								underline='hover'
								color='inherit'>
								About Us
							</Link>
							<Link
								href='#'
								underline='hover'
								color='inherit'>
								Services
							</Link>
							<Link
								href='#'
								underline='hover'
								color='inherit'>
								Contact
							</Link>
						</Box>
					</Grid>
					<Grid
						item
						xs={12}
						md={4}>
						<Typography
							variant='h6'
							sx={{ fontWeight: 'bold', mb: 2 }}>
							Follow Us
						</Typography>
						<Box
							sx={{
								display: 'flex',
								gap: 2,
							}}>
							<IconButton
								component='a'
								href='https://facebook.com'
								target='_blank'
								rel='noopener noreferrer'
								sx={{
									color: '#FFF5E1',
									backgroundColor: '#3b5998',
									'&:hover': { backgroundColor: '#2d4373' },
								}}>
								<FaFacebookF />
							</IconButton>
							<IconButton
								component='a'
								href='https://twitter.com'
								target='_blank'
								rel='noopener noreferrer'
								sx={{
									color: '#FFF5E1',
									backgroundColor: '#1DA1F2',
									'&:hover': { backgroundColor: '#0d8cdc' },
								}}>
								<FaTwitter />
							</IconButton>
							<IconButton
								component='a'
								href='https://instagram.com'
								target='_blank'
								rel='noopener noreferrer'
								sx={{
									color: '#FFF5E1',
									backgroundColor: '#E1306C',
									'&:hover': { backgroundColor: '#b32756' },
								}}>
								<FaInstagram />
							</IconButton>
							<IconButton
								component='a'
								href='https://linkedin.com'
								target='_blank'
								rel='noopener noreferrer'
								sx={{
									color: '#FFF5E1',
									backgroundColor: '#0077B5',
									'&:hover': { backgroundColor: '#005582' },
								}}>
								<FaLinkedinIn />
							</IconButton>
						</Box>
					</Grid>
				</Grid>
				<Box
					sx={{
						borderTop: `1px solid ${theme.palette.divider}`,
						mt: 4,
						pt: 3,
						textAlign: 'center',
					}}>
					<Typography variant='body2'>
						© {new Date().getFullYear()} LearnHalla. All rights reserved.
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
