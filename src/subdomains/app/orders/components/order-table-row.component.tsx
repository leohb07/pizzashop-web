import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowRight, Search, X } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/shared/modules/components/ui/button'
import { Dialog, DialogTrigger } from '@/shared/modules/components/ui/dialog'
import { TableCell, TableRow } from '@/shared/modules/components/ui/table'

import { IOrderTableRowComponent } from '../@types/order-table-row.type'
import { OrderDetailsComponent } from './order-details.component'
import { OrderStatusComponent } from './order-status.component'

export function OrderTableRowComponent({ order }: IOrderTableRowComponent) {
	const [isDetailsOpen, setIsDetailsOpen] = useState(false)

	const { createdAt, customerName, orderId, status, total } = order

	return (
		<TableRow>
			<TableCell>
				<Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
					<DialogTrigger asChild>
						<Button variant="outline" size="xs">
							<Search className="h-3 w-3" />
							<span className="sr-only">Detalhes do pedido</span>
						</Button>
					</DialogTrigger>

					<OrderDetailsComponent
						orderId={orderId}
						isOpenDialog={isDetailsOpen}
					/>
				</Dialog>
			</TableCell>

			<TableCell className="font-mono text-xs font-medium">{orderId}</TableCell>

			<TableCell className="text-muted-foreground">
				{formatDistanceToNow(createdAt, {
					locale: ptBR,
					addSuffix: true,
				})}
			</TableCell>

			<TableCell>
				<OrderStatusComponent status={status} />
			</TableCell>

			<TableCell className="font-medium">{customerName}</TableCell>

			<TableCell className="font-medium">
				{(total / 100).toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				})}
			</TableCell>

			<TableCell>
				<Button variant="outline" size="xs">
					<ArrowRight className="mr-2 h-3 w-3" />
					Aprovar
				</Button>
			</TableCell>

			<TableCell>
				<Button variant="ghost" size="xs">
					<X className="mr-2 h-3 w-3" />
					Cancelar
				</Button>
			</TableCell>
		</TableRow>
	)
}
