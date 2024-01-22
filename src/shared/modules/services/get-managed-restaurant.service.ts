import { api } from '../infra/axios'

export type TGetManagedRestaurantService = {
	id: string
	name: string
	createdAt: Date | null
	updatedAt: Date | null
	description: string | null
	managerId: string | null
}

export const getManagedRestaurantService = async () => {
	const { data } = await api.get<TGetManagedRestaurantService>(
		'/managed-restaurant',
	)

	return data
}
