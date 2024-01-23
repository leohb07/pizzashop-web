import { useQuery } from '@tanstack/react-query'

import { getOrdersService } from '../services/get-orders.service'

export const useOrdersHook = () => {
	const { data: resultOrders } = useQuery({
		queryKey: ['orders'],
		queryFn: getOrdersService,
	})

	return {
		resultOrders,
	}
}
