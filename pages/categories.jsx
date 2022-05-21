import {
	Diamond,
	DirectionsRun,
	FitnessCenter,
	FormatListBulleted,
	RollerSkating,
} from '@mui/icons-material'
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { useRouter } from 'next/router'
import ProductList from '../components/ProductList'
import { getAPIURL } from '../utils/origin'

export default function Categories({ products }) {
	const router = useRouter()

	const handleChange = ({ target: { value } }) => {
		router.replace({ pathname: '/categories', query: { option: value } })
	}

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
			<FormControl>
				<FormLabel id='category' sx={{ fontSize: 24 }}>
					Categorías
				</FormLabel>
				<RadioGroup aria-labelledby='category' defaultValue='all' onChange={handleChange} row>
					<FormControlLabel
						value='all'
						control={<Radio size='small' color='primary' />}
						label={
							<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
								<FormatListBulleted fontSize='small' />
								Todo
							</Box>
						}
					/>
					<FormControlLabel
						value='running'
						control={<Radio size='small' color='error' />}
						label={
							<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
								<DirectionsRun fontSize='small' />
								Running
							</Box>
						}
					/>
					<FormControlLabel
						value='moda'
						control={<Radio size='small' color='secondary' />}
						label={
							<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
								<Diamond fontSize='small' />
								Moda
							</Box>
						}
					/>
					<FormControlLabel
						value='entrenamiento'
						control={<Radio size='small' color='success' />}
						label={
							<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
								<FitnessCenter fontSize='small' />
								Entrenamiento
							</Box>
						}
					/>
					<FormControlLabel
						value='rollers'
						control={<Radio size='small' color='warning' />}
						label={
							<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
								<RollerSkating fontSize='small' />
								Rollers
							</Box>
						}
					/>
				</RadioGroup>
			</FormControl>
			<ProductList products={products} />
		</Box>
	)
}

export async function getServerSideProps(context) {
	const {
		query: { option },
	} = context

	const api = getAPIURL(context)

	const response = await fetch(`${api}/products?category=${option}`)
	const products = await response.json()

	return {
		props: {
			products,
		},
	}
}
