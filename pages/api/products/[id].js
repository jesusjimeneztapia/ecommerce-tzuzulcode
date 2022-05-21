import { database } from '../../../config/firebase'

export default async function getProduct(req, res) {
	const id = req.query.id

	const collection = await database.collection('descriptions').get()

	let productDescription

	collection.forEach((doc) => {
		if (doc.id === id) {
			productDescription = doc.data()
		}
	})

	if (productDescription) {
		const { product: productId, ...rest } = productDescription
		const specsCollections = await database.collection(`descriptions/${id}/specs`).get()
		let specs = []
		specsCollections.forEach((doc) => {
			specs = [...specs, { id: doc.id, ...doc.data() }]
		})

		const collection = await database.collection('products').get()
		let product

		collection.forEach((doc) => {
			if (doc.id === productId) {
				product = doc.data()
			}
		})

		product = {
			...rest,
			...product,
			specs,
		}
		return res.json(product)
	}

	return res.status(404).json({ message: `No existe el producto con el ID=${id}` })
}
