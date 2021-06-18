import axios from 'axios'
// todo -> add base URL and create axios client;
export async function getProducts() {
	const response = await axios.get(
		'http://localhost:5000/api/products/all-products'
	)
	return response.data
}
