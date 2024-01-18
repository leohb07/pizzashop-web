import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import {
	inputSignUpForm,
	TInputSignUpForm,
} from '../validations/signup.validation'

export const useSignUpHook = () => {
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<TInputSignUpForm>({
		resolver: inputSignUpForm,
	})

	const handleSignUp = async (payload: TInputSignUpForm) => {
		try {
			console.log(payload)

			await new Promise((resolve) => setTimeout(resolve, 2000))
			toast.success('Estabelecimento cadastrado com sucesso!', {
				action: {
					label: 'Login',
					onClick: () => navigate('/sign-in'),
				},
			})
		} catch (error) {
			toast.success('Erro ao cadastrar estabelecimento.')
		}
	}

	return {
		register,
		handleSignUp,
		handleSubmit,
		isSubmitting,
	}
}
