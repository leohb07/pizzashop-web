import { api } from '@/shared/modules/infra/axios'

export type TGetPopularProduct = {
	product: string
	amount: number
}[]

export const getPopularProductsService = async () => {
	const { data } = await api.get<TGetPopularProduct>(
		'/metrics/popular-products',
	)

	return data
}
