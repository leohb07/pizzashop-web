import { api } from '../infra/axios'

export const signOutService = async () => {
	await api.post('/sign-out')
}
