import { useForm } from 'react-hook-form'

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
		console.log(payload)

		await new Promise((resolve) => setTimeout(resolve, 2000))
	}

	return {
		register,
		handleSignIn,
		handleSubmit,
		isSubmitting,
	}
}
