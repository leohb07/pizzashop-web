import { api } from '@/shared/modules/infra/axios'

export type TGetOrdersService = {
	orders: {
		orderId: string
		createdAt: string
		status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
		customerName: string
		total: number
	}[]
	meta: {
		pageIndex: number
		perPage: number
		totalCount: number
	}
}

export const getOrdersService = async () => {
	const { data } = await api.get<TGetOrdersService>('/orders', {
		params: {
			pageIndex: 0,
		},
	})

	return data
}
