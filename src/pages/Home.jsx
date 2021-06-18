/* eslint-disable no-unused-vars */
import { Carousel } from 'components'
import Layout from 'components/Layout/Layout'
import EmptySearchResult from 'components/Product/EmptySearchResult'
import ProductLayout from 'components/Product/ProductLayout'
import SEO from 'components/SEO'
import SectionHeader from 'components/ui/Section/SectionHeader'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

import { useCart } from '../context/cartContext'
import { useShop } from '../context/shopContext'
import { getSortedData } from './../common/helpers'
import Empty from './../components/ui/Placeholder/Empty'

export default function Home() {
	const { state: shop, dispatch: shopDispatch } = useShop()
	const { state: cart } = useCart()

	function getSearchedItems(query) {
		return shop.data.filter((product) =>
			product.title.toLowerCase().includes(query) ? product : null
		)
	}
	function getInStock(data) {
		return shop.data.filter((item) => item.inStock)
	}

	const sortedData = getSortedData(shop.data, shop.sort)

	function getFiltered(sortedData, { expressDelivery, outOfStock }) {
		return sortedData
			.filter((item) => {
				if (expressDelivery === true) return item.expressDelivery === true
				return item
			})
			.filter((item) => {
				if (outOfStock === false) return item.inStock === true
				return item
			})
	}

	const filteredData = getFiltered(sortedData, shop.filters)

	return (
		<>
			<SEO
				title="Explore Products | Doge Mart"
				description="The premier place to shop !"
			/>

			<div className="mt-3">
				<Layout>
					<SectionHeader title="Store" />
					{shop.searchQuery ? (
						<>
							{getSearchedItems(shop.searchQuery).length > 0 ? (
								<>
									<ProductLayout
										loading={shop?.loading}
										productList={getSearchedItems(shop.searchQuery)}
										errorStatus={shop?.error}
									/>
								</>
							) : (
								<EmptySearchResult query={shop.searchQuery} />
							)}
						</>
					) : (
						<ProductLayout
							loading={shop?.loading}
							// productList={shop?.data}
							productList={filteredData}
							errorStatus={shop?.error}
						/>
					)}
				</Layout>
			</div>
		</>
	)
}
