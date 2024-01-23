import { Search } from 'lucide-react'
import { Controller } from 'react-hook-form'

import { Button } from '@/shared/modules/components/ui/button'
import { Input } from '@/shared/modules/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/modules/components/ui/select'

import { useOrderTableFiltersHook } from '../hooks/components/order-table-filters.hook'

export function OrderTableFiltersComponent() {
	const { handleFilter, handleSubmit, register, control, handleClearFilters } =
		useOrderTableFiltersHook()

	return (
		<form
			onSubmit={handleSubmit(handleFilter)}
			className="flex items-center gap-2"
		>
			<span className="text-sm font-semibold">Filtros:</span>
			<Input
				placeholder="ID do pedido"
				className="w-auto"
				{...register('orderId')}
			/>

			<Input
				placeholder="Nome do cliente"
				className="w-[320px]"
				{...register('customerName')}
			/>

			<Controller
				name="status"
				control={control}
				render={({ field: { name, onChange, value, disabled } }) => {
					return (
						<Select
							defaultValue="all"
							name={name}
							onValueChange={onChange}
							value={value}
							disabled={disabled}
						>
							<SelectTrigger className="w-[180px]">
								<SelectValue />
							</SelectTrigger>

							<SelectContent>
								<SelectItem value="all">Todos status</SelectItem>
								<SelectItem value="pending">Pendentes</SelectItem>
								<SelectItem value="canceled">Cancelado</SelectItem>
								<SelectItem value="processing">Em preparo</SelectItem>
								<SelectItem value="delivering">Em entrega</SelectItem>
								<SelectItem value="delivered">Entregue</SelectItem>
							</SelectContent>
						</Select>
					)
				}}
			/>

			<Button type="submit" variant="secondary" size="xs">
				<Search className="mr-2 h-4 w-4" />
				Filtrar resultados
			</Button>

			<Button
				type="button"
				variant="outline"
				size="xs"
				onClick={handleClearFilters}
			>
				<Search className="mr-2 h-4 w-4" />
				Remover filtros
			</Button>
		</form>
	)
}
