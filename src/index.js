import { CartProvider } from './context/cartContext'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { ShopProvider } from './context/shopContext'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { AuthProvider } from 'context/authContext'

// remove this later
// server()

const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

ReactDOM.render(
	<QueryClientProvider client={client}>
		<AuthProvider>
			<HelmetProvider>
				<ShopProvider>
					<CartProvider>
						<App />
						<ReactQueryDevtools />
					</CartProvider>
				</ShopProvider>
			</HelmetProvider>
		</AuthProvider>
	</QueryClientProvider>,
	document.getElementById('root')
)
