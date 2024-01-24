import { api } from '@/shared/modules/infra/axios'

export interface IGetDayOrdersAmountService {
	amount: number
	diffFromYesterday: number
}

export const getDayOrdersAmountService = async () => {
	const { data } = await api.get<IGetDayOrdersAmountService>(
		'metrics/day-orders-amount',
	)

	return data
}
