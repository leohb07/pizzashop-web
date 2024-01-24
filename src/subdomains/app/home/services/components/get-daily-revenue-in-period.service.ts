import { api } from '@/shared/modules/infra/axios'

export interface IGetDailyRevenueInPeriodService {
	from?: Date
	to?: Date
}

export type TGetDailyRevenueInPeriod = {
	date: string
	receipt: number
}[]

export const getDailyRevenueInPeriodService = async ({
	from,
	to,
}: IGetDailyRevenueInPeriodService) => {
	const { data } = await api.get<TGetDailyRevenueInPeriod>(
		'/metrics/daily-receipt-in-period',
		{
			params: {
				from,
				to,
			},
		},
	)

	return data
}
