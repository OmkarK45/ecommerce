/* eslint-disable no-unused-vars */
import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Header, Layout } from 'components'
import {
	Home,
	NotFound,
	Product,
	Cart,
	Wishlist,
	ProductDetailPage,
	Marketing,
} from './pages'
import FancyRoute from './components/Route/Route'
import { useShop } from './context/shopContext'
import { fetchProductsSuccess } from 'context/actions/shopActions'

// new code
import { useQuery } from 'react-query'
import { getProducts } from 'services/axios'
import Login from 'components/Auth/Login'
import Register from 'components/Auth/Register'
import { PrivateRoute } from 'components/Route/PrivateRoute'

export default function App() {
	const { state: shop, dispatch: shopDispatch } = useShop()

	const { data, isLoading, error } = useQuery('getProducts', getProducts)

	if (isLoading) return <div>Loading products</div>

	if (error) return <div> This went wrong = {error.message}</div>

	console.log(data)

	return (
		<>
			<div>
				<pre>{JSON.stringify(data, null, 2)}</pre>
			</div>
			<Toaster
				position="bottom-right"
				reverseOrder={false}
				toastOptions={{
					success: {
						iconTheme: {
							primary: '#059669',
						},
					},
				}}
			/>
			<Router>
				<Header />
				<Switch>
					<FancyRoute path="/" exact component={Marketing} />
					<FancyRoute path="/store" exact component={Home} />
					<FancyRoute path="/auth/login" exact component={Login} />
					<FancyRoute path="/auth/register" exact component={Register} />
					<Layout>
						<FancyRoute path="/product" exact component={Product} />
						<PrivateRoute>
							<FancyRoute path="/cart" exact component={Cart} />
						</PrivateRoute>
						<FancyRoute path="/wishlist" exact component={Wishlist} />
						<FancyRoute
							path="/products/:id/:slug"
							exact
							component={ProductDetailPage}
						/>
					</Layout>
					<FancyRoute path="*" component={NotFound} />
				</Switch>
			</Router>
		</>
	)
}
