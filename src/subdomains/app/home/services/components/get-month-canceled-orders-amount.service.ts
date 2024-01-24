import { api } from '@/shared/modules/infra/axios'

export interface IGetMonthCanceledOrdersAmountService {
	amount: number
	diffFromLastMonth: number
}

export const getMonthCanceledOrdersAmountService = async () => {
	const { data } = await api.get<IGetMonthCanceledOrdersAmountService>(
		'metrics/month-canceled-orders-amount',
	)

	return data
}
