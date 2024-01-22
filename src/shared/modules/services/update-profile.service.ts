import { api } from '../infra/axios'

type TUpdateProfileService = {
	name: string
	description: string | null
}

export const updateProfileService = async (payload: TUpdateProfileService) => {
	const { description, name } = payload

	await api.put('/profile', { name, description })
}
