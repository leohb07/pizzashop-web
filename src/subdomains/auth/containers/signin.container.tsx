import { Helmet } from 'react-helmet-async'

import { SignInInterface } from '../interfaces/signin.interface'

export function SignInContainer() {
	return (
		<>
			<Helmet title="Sign In" />
			<SignInInterface />
		</>
	)
}
