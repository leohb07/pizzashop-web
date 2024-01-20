import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { signUpService } from '../services/signup.service'
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

	const { mutateAsync: registerAccount } = useMutation({
		mutationFn: signUpService,
	})

	const handleSignUp = async (payload: TInputSignUpForm) => {
		try {
			const { email, managerName, phone, restaurantName } = payload

			await registerAccount({
				email,
				managerName,
				phone,
				restaurantName,
			})

			toast.success('Estabelecimento cadastrado com sucesso!', {
				action: {
					label: 'Login',
					onClick: () => navigate(`/sign-in?email=${email}`),
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
