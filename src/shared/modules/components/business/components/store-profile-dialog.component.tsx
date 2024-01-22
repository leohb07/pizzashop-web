import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
	getManagedRestaurantService,
	TGetManagedRestaurantService,
} from '@/shared/modules/services/get-managed-restaurant.service'
import { updateProfileService } from '@/shared/modules/services/update-profile.service'
import {
	storeProfileDialogValidation,
	TStoreProfileDialogValidation,
} from '@/shared/modules/validations/store-profile-dialog.validation'

import { Button } from '../../ui/button'
import {
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '../../ui/dialog'
import { Input } from '../../ui/input'
import { Label } from '../../ui/label'
import { Textarea } from '../../ui/textarea'

export function StoreProfileDialogComponent() {
	const queryClient = useQueryClient()

	const { data: managedRestaurant } = useQuery({
		queryKey: ['managed-restaurant'],
		queryFn: getManagedRestaurantService,
		staleTime: Infinity,
	})

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<TStoreProfileDialogValidation>({
		resolver: storeProfileDialogValidation,
		values: {
			name: managedRestaurant?.name ?? '',
			description: managedRestaurant?.description ?? '',
		},
	})

	const updateManagedRestaurantCache = (
		payload: TStoreProfileDialogValidation,
	) => {
		const { name, description } = payload

		const cached = queryClient.getQueryData<TGetManagedRestaurantService>([
			'managed-restaurant',
		])

		if (cached) {
			queryClient.setQueryData<TGetManagedRestaurantService>(
				['managed-restaurant'],
				{
					...cached,
					name,
					description,
				},
			)
		}

		return { cached }
	}

	const { mutateAsync: updateProfileMutation } = useMutation({
		mutationFn: updateProfileService,
		onMutate({ description, name }) {
			const { cached } = updateManagedRestaurantCache({ name, description })

			return { previousProfile: cached }
		},
		onError(_, __, context) {
			if (context?.previousProfile) {
				updateManagedRestaurantCache(context.previousProfile)
			}
		},
	})

	const handleUpdateProfile = async (data: TStoreProfileDialogValidation) => {
		try {
			const { description, name } = data

			await updateProfileMutation({
				description,
				name,
			})

			toast.success('Perfil atualizado com sucesso!')
		} catch {
			toast.error('Falha ao atualizar pefil, tente novamente!')
		}
	}

	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Perfil da loja</DialogTitle>
				<DialogDescription>
					Atualize as informações do seu estabelecimento visíveis ao seu cliente
				</DialogDescription>
			</DialogHeader>

			<form onSubmit={handleSubmit(handleUpdateProfile)}>
				<div className="space-y-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label className="text-right" htmlFor="name">
							Nome
						</Label>
						<Input className="col-span-3" id="name" {...register('name')} />
					</div>

					<div className="grid grid-cols-4 items-center gap-4">
						<Label className="text-right" htmlFor="description">
							Descrição
						</Label>
						<Textarea
							className="col-span-3"
							id="description"
							{...register('description')}
						/>
					</div>
				</div>

				<DialogFooter>
					<DialogClose asChild>
						<Button variant="ghost" type="button">
							Cancelar
						</Button>
					</DialogClose>

					<Button type="submit" variant="success" disabled={isSubmitting}>
						Salvar
					</Button>
				</DialogFooter>
			</form>
		</DialogContent>
	)
}
