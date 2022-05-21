import { ShoppingCart } from '@mui/icons-material'
import { Button } from '@mui/material'
import Link from 'next/link'

export default function Cart() {
	return (
		<Button color='warning'>
			<Link href='/cart'>
				<a>
					<ShoppingCart />
				</a>
			</Link>
		</Button>
	)
}
