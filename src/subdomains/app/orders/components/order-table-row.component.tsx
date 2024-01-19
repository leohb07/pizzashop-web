import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/shared/modules/components/ui/button'
import { Dialog, DialogTrigger } from '@/shared/modules/components/ui/dialog'
import { TableCell, TableRow } from '@/shared/modules/components/ui/table'

import { OrderDetailsComponent } from './order-details.component'

export function OrderTableRowComponent() {
	return (
		<TableRow>
			<TableCell>
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline" size="xs">
							<Search className="h-3 w-3" />
							<span className="sr-only">Detalhes do pedido</span>
						</Button>
					</DialogTrigger>

					<OrderDetailsComponent />
				</Dialog>
			</TableCell>

			<TableCell className="font-mono text-xs font-medium">
				81273821ahsduiasd123
			</TableCell>

			<TableCell className="text-muted-foreground">há 15 minutos</TableCell>

			<TableCell>
				<div className="flex items-center gap-2">
					<span className="h-2 w-2 rounded-full bg-slate-400" />
					<span className="font-medium text-muted-foreground">Pendente</span>
				</div>
			</TableCell>

			<TableCell className="font-medium">Leonardo Henrique Barrocal</TableCell>

			<TableCell className="font-medium">R$ 129,90</TableCell>

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
