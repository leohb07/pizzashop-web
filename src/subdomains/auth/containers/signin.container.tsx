import { Helmet } from 'react-helmet-async'

import { useSignInHook } from '../hooks/signin.hook'
import { SignInInterface } from '../interfaces/signin.interface'

export function SignInContainer() {
	const signInHook = useSignInHook()

	return (
		<>
			<Helmet title="Sign In" />
			<SignInInterface {...signInHook} />
		</>
	)
}
