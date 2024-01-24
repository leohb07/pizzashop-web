import { api } from '@/shared/modules/infra/axios'

export interface IGetMonthRevenueService {
	amount: number
	diffFromLastMonth: number
}

export const getMonthRevenueService = async () => {
	const { data } = await api.get<IGetMonthRevenueService>(
		'metrics/month-receipt',
	)

	return data
}
