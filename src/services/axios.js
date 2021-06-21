import axios from 'axios'
// todo -> add base URL and create axios client;
export const ApiClient = axios.create({
	baseURL:
		process.env.NODE_ENV === 'production'
			? process.env.REACT_APP_BACKEND_PROD + '/api'
			: process.env.REACT_APP_BACKEND_DEV + '/api',
	withCredentials: true,
})

export async function getProducts() {
	const response = await ApiClient.get('/products/all-products')
	return response.data
}

/**
 * @param productId - string
 * */
export async function getProduct(productId) {
	const response = await ApiClient.get(`/products/${productId}`)
	return response.data
}

/**
 * @param {string} email
 * @param {string} password
 * Logs user in
 */
export async function login({ email, password }) {
	return await ApiClient.post(
		'/auth/sign-in',
		{
			email,
			password,
		},
		{
			withCredentials: true,
		}
	)
}

/**
 * @param credentials object
 * Registers user with email and etc
 * */
export async function register({ firstName, lastName, email, password }) {
	return await ApiClient.post(
		'/auth/sign-up',
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

/**
 * Fetches user info from cookies
 * */

export async function getUser() {
	return await ApiClient.get('/auth/user-info', {
		withCredentials: true,
	})
}

/**
 * Destroys user session and logs them out
 * */
export async function logout() {
	return await ApiClient.post(
		'/auth/logout',
		{},
		{
			withCredentials: true,
		}
	)
}
