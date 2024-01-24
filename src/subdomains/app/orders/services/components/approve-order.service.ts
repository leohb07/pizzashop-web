import { api } from '@/shared/modules/infra/axios'

export interface IApproveOrderParams {
	orderId: string
}

export const approveOrderService = async ({ orderId }: IApproveOrderParams) => {
	await api.patch(`/orders/${orderId}/approve`)
}
