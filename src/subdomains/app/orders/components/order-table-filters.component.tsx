import { Search } from 'lucide-react'

import { Button } from '@/shared/modules/components/ui/button'
import { Input } from '@/shared/modules/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/modules/components/ui/select'

export function OrderTableFiltersComponent() {
	return (
		<form className="flex items-center gap-2">
			<span className="text-sm font-semibold">Filtros:</span>
			<Input placeholder="ID do pedido" className="w-auto" />

			<Input placeholder="Nome do cliente" className="w-[320px]" />

			<Select defaultValue="all">
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

			<Button type="submit" variant="secondary" size="xs">
				<Search className="mr-2 h-4 w-4" />
				Filtrar resultados
			</Button>

			<Button type="button" variant="outline" size="xs">
				<Search className="mr-2 h-4 w-4" />
				Remover filtros
			</Button>
		</form>
	)
}
