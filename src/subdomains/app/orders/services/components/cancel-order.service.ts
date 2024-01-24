import { api } from '@/shared/modules/infra/axios'

export interface ICancelOrderParams {
	orderId: string
}

export const cancelOrderService = async ({ orderId }: ICancelOrderParams) => {
	await api.patch(`/orders/${orderId}/cancel`)
}
