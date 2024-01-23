import { api } from '@/shared/modules/infra/axios'

export interface IGetOrdersQuery {
	pageIndex?: number
	orderId?: string | null
	customerName?: string | null
	status?: string | null
}

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

export const getOrdersService = async (payload: IGetOrdersQuery) => {
	const { customerName, orderId, pageIndex, status } = payload

	const { data } = await api.get<TGetOrdersService>('/orders', {
		params: {
			pageIndex,
			customerName,
			orderId,
			status,
		},
	})

	return data
}
