import { api } from '@/shared/modules/infra/axios'

export interface IDispatchOrderParams {
	orderId: string
}

export const dispatchOrderService = async ({
	orderId,
}: IDispatchOrderParams) => {
	await api.patch(`/orders/${orderId}/dispatch`)
}
