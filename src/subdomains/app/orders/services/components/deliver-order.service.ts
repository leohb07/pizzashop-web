import { api } from '@/shared/modules/infra/axios'

export interface IDeliverOrderParams {
	orderId: string
}

export const deliverOrderService = async ({ orderId }: IDeliverOrderParams) => {
	await api.patch(`/orders/${orderId}/deliver`)
}
