import { Box, Typography } from '@mui/material'
import ProductList from '../../components/ProductList'
import { getAPIURL } from '../../utils/origin'

export default function Products({ products }) {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
			<Typography sx={{ fontSize: 24 }}>Productos</Typography>
			<ProductList products={products} />
		</Box>
	)
}

export async function getServerSideProps(context) {
	const api = getAPIURL(context)

	const response = await fetch(`${api}/products?category=all`)
	const products = await response.json()

	return {
		props: {
			products,
		},
	}
}
