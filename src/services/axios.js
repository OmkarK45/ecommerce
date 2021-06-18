import axios from 'axios'
// todo -> add base URL and create axios client;
export async function getProducts() {
	const response = await axios.get(
		'http://localhost:5000/api/products/all-products'
	)
	return response.data
}

/**
 * @param productId - string
 * */
export async function getProduct(productId) {
	const response = await axios.get(
		`http://localhost:5000/api/products/${productId}`
	)
	return response.data
}

/**
 * @param credentials object
 *
 */
export async function login({ email, password }) {
	return await axios.post(
		'http://localhost:5000/api/auth/sign-in',
		{
			email,
			password,
		},
		{
			headers: {
				'Content-Type': 'application/json',
			},
		},
		{ withCredentials: true }
	)
}

/**
 * @param credentials object
 * */
export async function register({ firstName, lastName, email, password }) {
	return await axios.post(
		'http://localhost:5000/api/auth/sign-up',
		{
			firstName,
			lastName,
			email,
			password,
		},
		{
			headers: {
				'Content-Type': 'application/json',
			},
		},
		{ withCredentials: true }
	)
}
