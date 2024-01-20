import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'

import { signInService } from '../services/signin.service'
import {
	inputSignInForm,
	TInputSignInForm,
} from '../validations/signin.validation'

export const useSignInHook = () => {
	const [searchParams] = useSearchParams()

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<TInputSignInForm>({
		resolver: inputSignInForm,
		defaultValues: {
			email: searchParams.get('email') ?? '',
		},
	})

	const { mutateAsync: authenticate } = useMutation({
		mutationFn: signInService,
	})

	const handleSignIn = async (payload: TInputSignInForm) => {
		try {
			await authenticate({ email: payload.email })

			toast.success('Enviamos um link de autenticação para seu e-mail.')
		} catch (error) {
			toast.success('Credenciais inválidas.')
		}
	}

	return {
		register,
		handleSignIn,
		handleSubmit,
		isSubmitting,
	}
}
