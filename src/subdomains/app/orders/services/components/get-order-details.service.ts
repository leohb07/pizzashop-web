import { api } from '@/shared/modules/infra/axios'

export type TGetOrderDetailsService = {
	orderId: string
}

export interface IGetOrderDetailsService {
	id: string
	createdAt: string
	status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
	totalInCents: number
	customer: {
		name: string
		email: string
		phone: string | null
	}
	orderItems: {
		id: string
		priceInCents: number
		quantity: number
		product: {
			name: string
		}
	}[]
}

export const getOrderDetailsService = async ({
	orderId,
}: TGetOrderDetailsService) => {
	const { data } = await api.get<IGetOrderDetailsService>(`/orders/${orderId}`)

	return data
}
