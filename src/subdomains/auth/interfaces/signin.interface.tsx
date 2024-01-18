import { Button } from '@/shared/modules/components/ui/button'
import { Input } from '@/shared/modules/components/ui/input'
import { Label } from '@/shared/modules/components/ui/label'

import { useSignInHook } from '../hooks/signin.hook'

type TSignInInterface = ReturnType<typeof useSignInHook>

export function SignInInterface(props: TSignInInterface) {
	const { handleSubmit, isSubmitting, register, handleSignIn } = props

	return (
		<div className="p-8">
			<div className="flex w-[350px] flex-col justify-center gap-6">
				<div className="flex flex-col gap-2 text-center">
					<h1 className="text-2xl font-semibold tracking-tight">
						Acessar painel
					</h1>
					<p className="text-sm text-muted-foreground">
						Acompanhe suas vendas pelo painel do parceiro!
					</p>
				</div>

				<form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
					<div className="space-y-2">
						<Label htmlFor="email">Seu e-mail</Label>
						<Input type="email" id="email" {...register('email')} />
					</div>

					<Button className="w-full" type="submit" disabled={isSubmitting}>
						Acessar painel
					</Button>
				</form>
			</div>
		</div>
	)
}
