import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
	inputSignInForm,
	TInputSignInForm,
} from '../validations/signin.validation'

export const useSignInHook = () => {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<TInputSignInForm>({
		resolver: inputSignInForm,
	})

	const handleSignIn = async (payload: TInputSignInForm) => {
		try {
			console.log(payload)

			await new Promise((resolve) => setTimeout(resolve, 2000))
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
