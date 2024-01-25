import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getOrdersService } from '../services/get-orders.service'

export const useOrdersHook = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const orderId = searchParams.get('orderId')
	const customerName = searchParams.get('customerName')
	const status = searchParams.get('status')

	const pageIndex = z.coerce
		.number()
		.transform((page) => page - 1)
		.parse(searchParams.get('page') ?? '1')

	const { data: resultOrders, isLoading: isLoadingOrders } = useQuery({
		queryKey: ['orders', pageIndex, orderId, customerName, status],
		queryFn: () =>
			getOrdersService({
				pageIndex,
				customerName,
				orderId,
				status: status === 'all' ? null : status,
			}),
	})

	const handlePaginate = (pageIndex: number) => {
		setSearchParams((prev) => {
			prev.set('page', (pageIndex + 1).toString())

			return prev
		})
	}

	return {
		resultOrders,
		isLoadingOrders,
		handlePaginate,
	}
}
