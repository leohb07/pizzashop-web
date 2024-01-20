import { api } from '../infra/axios'

type TGetProfileService = {
	id: string
	name: string
	email: string
	phone: string | null
	role: 'manager' | 'customer'
	createdAt: Date | null
	updatedAt: Date | null
}

export const getProfileService = async () => {
	const { data } = await api.get<TGetProfileService>('/me')

	return data
}
