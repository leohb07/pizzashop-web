import { api } from '@/shared/modules/infra/axios'

export interface IGetMonthOrdersAmountService {
	amount: number
	diffFromLastMonth: number
}

export const getMonthOrdersAmountService = async () => {
	const { data } = await api.get<IGetMonthOrdersAmountService>(
		'metrics/month-orders-amount',
	)

	return data
}
