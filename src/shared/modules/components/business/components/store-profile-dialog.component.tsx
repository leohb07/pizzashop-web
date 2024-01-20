import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

import { getManagedRestaurantService } from '@/shared/modules/services/get-managed-restaurant.service'
import {
	storeProfileDialogValidation,
	TStoreProfileDialogValidation,
} from '@/shared/modules/validations/store-profile-dialog.validation'

import { Button } from '../../ui/button'
import {
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
	const { data: managedRestaurant } = useQuery({
		queryKey: ['managed-restaurant'],
		queryFn: getManagedRestaurantService,
	})

	const { register } = useForm<TStoreProfileDialogValidation>({
		resolver: storeProfileDialogValidation,
		values: {
			name: managedRestaurant?.name ?? '',
			description: managedRestaurant?.description ?? '',
		},
	})

	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Perfil da loja</DialogTitle>
				<DialogDescription>
					Atualize as informações do seu estabelecimento visíveis ao seu cliente
				</DialogDescription>
			</DialogHeader>

			<form>
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
					<Button variant="ghost" type="button">
						Cancelar
					</Button>
					<Button type="submit" variant="success">
						Salvar
					</Button>
				</DialogFooter>
			</form>
		</DialogContent>
	)
}
