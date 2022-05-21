import { Box } from '@mui/material'
import ProductCard from './ProductCard'

export default function ProductList({ products }) {
	return (
		<Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
			{products.map(({ id, mediumImage, category, name, price, description }) => (
				<ProductCard
					key={id}
					mediumImage={mediumImage}
					name={name}
					category={category}
					price={price}
					description={description}
				/>
			))}
		</Box>
	)
}
