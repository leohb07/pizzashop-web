import { api } from '@/shared/modules/infra/axios'

export type TSignInService = {
	email: string
}

export const signInService = async (payload: TSignInService) => {
	const { email } = payload

	await api.post('/authenticate', { email })
}
