import { Link } from 'react-router-dom'

import { Button } from '@/shared/modules/components/ui/button'
import { Input } from '@/shared/modules/components/ui/input'
import { Label } from '@/shared/modules/components/ui/label'

import { useSignUpHook } from '../hooks/signup.hook'

type TSignInInterface = ReturnType<typeof useSignUpHook>

export function SignUpInterface(props: TSignInInterface) {
	const { handleSignUp, handleSubmit, isSubmitting, register } = props

	return (
		<div className="p-8">
			<Button asChild variant="outline" className="absolute right-8 top-8">
				<Link to="/sign-in">Fazer login</Link>
			</Button>

			<div className="flex w-[350px] flex-col justify-center gap-6">
				<div className="flex flex-col gap-2 text-center">
					<h1 className="text-2xl font-semibold tracking-tight">
						Criar conta grátis
					</h1>
					<p className="text-sm text-muted-foreground">
						Seja um parceiro e comece suas vendas!
					</p>
				</div>

				<form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
					<div className="space-y-2">
						<Label htmlFor="restaurantName">Nome do estabelecimento</Label>
						<Input
							type="text"
							id="restaurantName"
							{...register('restaurantName')}
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="managerName">Seu nome</Label>
						<Input type="text" id="managerName" {...register('managerName')} />
					</div>

					<div className="space-y-2">
						<Label htmlFor="email">Seu e-mail</Label>
						<Input type="email" id="email" {...register('email')} />
					</div>

					<div className="space-y-2">
						<Label htmlFor="phone">Seu celular</Label>
						<Input type="tel" id="phone" {...register('phone')} />
					</div>

					<Button className="w-full" type="submit" disabled={isSubmitting}>
						Finalizar cadastro
					</Button>

					<p className="px-6 text-center text-sm leading-relaxed text-muted-foreground ">
						Ao continuar, você concorda com nossos{' '}
						<a href="" className="underline underline-offset-4">
							termos de serviço
						</a>{' '}
						e{' '}
						<a href="" className="underline underline-offset-4">
							políticas de privacidade
						</a>
						.
					</p>
				</form>
			</div>
		</div>
	)
}
