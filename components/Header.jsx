import { SportsSoccer } from '@mui/icons-material'
import { Box, Button, Container, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import firebase from 'firebase'
import { useAuthUser, withAuthUser } from 'next-firebase-auth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Cart from './Cart'

function Header() {
	const { pathname } = useRouter()
	const user = useAuthUser()

	const handleLogout = () => {
		firebase.auth().signOut()
	}

	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				paddingY: 2,
				boxShadow: `0 4px 4px -4px ${grey[400]}, 0 8px 8px -3px ${grey[200]}`,
			}}
		>
			<Link href='/'>
				<a>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<SportsSoccer color='info' fontSize='large' />
						<Typography sx={{ display: 'inline', fontSize: 28 }}>Sports</Typography>
					</Box>
				</a>
			</Link>
			<Box sx={{ display: 'flex', gap: 2 }}>
				<Button color={pathname === '/categories' ? 'primary' : 'inherit'}>
					<Link href={{ pathname: '/categories', query: { option: 'all' } }}>Categorías</Link>
				</Button>
				<Button color={pathname === '/products' ? 'primary' : 'inherit'}>
					<Link href='/products'>Productos</Link>
				</Button>
				<Cart />
				{pathname !== '/auth' && !user.email && (
					<Button variant='contained' color='secondary'>
						<Link href='/auth'>Ingresa o registrate</Link>
					</Button>
				)}
				{user.email && (
					<Button variant='contained' color='error' onClick={handleLogout}>
						Cerrar Sesión
					</Button>
				)}
			</Box>
		</Container>
	)
}

export default withAuthUser()(Header)
