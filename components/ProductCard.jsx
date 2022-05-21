import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { blue, cyan } from '@mui/material/colors'
import Link from 'next/link'

export default function ProductCard({ mediumImage, name, category, price, description }) {
	return (
		<Button color='info'>
			<Link href={{ pathname: '/products/[id]', query: { id: description } }}>
				<a>
					<Card
						sx={{
							position: 'relative',
							maxWidth: 240,
							padding: 2,
							':hover::before': {
								content: '""',
								width: '100%',
								height: '2px',
								position: 'absolute',
								backgroundColor: cyan[500],
								top: 0,
								left: 0,
							},
						}}
					>
						<CardMedia component='img' height={198} image={mediumImage} alt={name} />
						<CardContent>
							<Typography sx={{ fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase' }}>
								{category}
							</Typography>
							<Typography
								sx={{ fontSize: 12, textTransform: 'uppercase', textAlign: 'left' }}
								gutterBottom
							>
								{name}
							</Typography>
							<Typography
								sx={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left' }}
								color={blue[500]}
							>
								${price}
							</Typography>
						</CardContent>
					</Card>
				</a>
			</Link>
		</Button>
	)
}
