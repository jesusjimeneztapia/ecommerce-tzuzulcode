import { Box, Button, CardMedia, Container, List, ListItemText, Typography } from '@mui/material'
import { blue, grey, green, red } from '@mui/material/colors'
import { getAPIURL } from '../../utils/origin'

export default function Product({ largeImage, category, name, price, sizes, details, specs }) {
	return (
		<Container sx={{ paddingY: 6, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 6 }}>
			<CardMedia component='img' image={largeImage} alt={name} />
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 3 }}>
				<Box>
					<Typography
						sx={{ fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase' }}
						color={green[500]}
					>
						{category}
					</Typography>
					<Typography
						sx={{ textTransform: 'uppercase', fontSize: 20 }}
						color={blue[500]}
						gutterBottom
					>
						{name}
					</Typography>
				</Box>
				<Typography sx={{ fontWeight: 'bold' }} color={red[500]}>
					${price}
				</Typography>
				<Box>
					<Typography sx={{ marginBottom: 1 }}>Tallas:</Typography>
					<Box sx={{ display: 'flex', gap: 1 }}>
						{sizes.map((size, index) => (
							<Typography
								sx={{
									width: 40,
									height: 40,
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									borderRadius: 24,
									border: `1px solid ${grey[500]}`,
									fontSize: 12,
								}}
								key={index}
								color={grey[500]}
							>
								{size}
							</Typography>
						))}
					</Box>
				</Box>
				<Button variant='contained' color='success'>
					Agregar al carrito
				</Button>
			</Box>
			<Box>
				<Typography sx={{ fontWeight: 'bold', fontSize: 20, textTransform: 'uppercase' }}>
					Detalles
				</Typography>
				<List>
					{details.map((detail, index) => (
						<ListItemText key={index}>{detail}</ListItemText>
					))}
				</List>
			</Box>
			<Box>
				<Typography sx={{ fontWeight: 'bold', fontSize: 20, textTransform: 'uppercase' }}>
					Especificaciones
				</Typography>
				<List>
					{specs.map(({ id, name, value }) => (
						<ListItemText key={id}>
							<Typography sx={{ fontWeight: 'bold', display: 'inline', marginRight: 1 }}>
								{name}:
							</Typography>
							<span>{value}</span>
						</ListItemText>
					))}
				</List>
			</Box>
		</Container>
	)
}

export async function getServerSideProps(context) {
	const api = getAPIURL(context)
	const { id } = context.query

	const response = await fetch(`${api}/products/${id}`)
	const product = await response.json()

	return {
		props: {
			...product,
		},
	}
}
