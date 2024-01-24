import { isAxiosError } from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../infra/axios'

export const useAppLayoutHook = () => {
	const navigate = useNavigate()

	useEffect(() => {
		const interceptorId = api.interceptors.response.use(
			(response) => response,
			(error) => {
				if (isAxiosError(error)) {
					const status = error.response?.status
					const code = error.response?.data.code

					if (status === 401 && code === 'UNAUTHORIZED') {
						navigate('/sign-in', { replace: true })
					}
				}
			},
		)

		return () => {
			api.interceptors.response.eject(interceptorId)
		}
	}, [navigate])

	return {}
}
