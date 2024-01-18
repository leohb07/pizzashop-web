import { Helmet } from 'react-helmet-async'

import { useSignUpHook } from '../hooks/signup.hook'
import { SignUpInterface } from '../interfaces/signup.interface'

export function SignUpContainer() {
	const signUpHook = useSignUpHook()

	return (
		<>
			<Helmet title="Sign Up" />
			<SignUpInterface {...signUpHook} />
		</>
	)
}
