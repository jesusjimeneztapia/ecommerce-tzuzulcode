import { database } from '../../../config/firebase'

export default async function getAllProducts(req, res) {
	const { category } = req.query
	const collection = await database.collection('products').get()
	let products = []
	collection.forEach((doc) => (products = [...products, { id: doc.id, ...doc.data() }]))

	if (category !== 'all') {
		products = products.filter((product) => product.category.toLowerCase() === category)
	}
	return res.json(products)
}
