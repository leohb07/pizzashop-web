import { api } from '@/shared/modules/infra/axios'

export type TSignUpService = {
	restaurantName: string
	managerName: string
	email: string
	phone: string
}

export const signUpService = async (payload: TSignUpService) => {
	const { email, managerName, phone, restaurantName } = payload

	await api.post('/restaurants', {
		restaurantName,
		managerName,
		email,
		phone,
	})
}
