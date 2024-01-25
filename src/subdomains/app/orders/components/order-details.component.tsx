import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/shared/modules/components/ui/dialog'
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/shared/modules/components/ui/table'

import { IOrderDetailsComponent } from '../@types/order-details.type'
import { useOrderDetailsHook } from '../hooks/components/order-details.hook'
import { OrderDetailsSkeletonComponent } from './order-details-skeleton.component'
import { OrderStatusComponent } from './order-status.component'

export function OrderDetailsComponent(props: IOrderDetailsComponent) {
	const { order, orderId } = useOrderDetailsHook(props)

	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>
					Pedido: <span className="font-mono">{orderId}</span>
				</DialogTitle>
				<DialogDescription>Detalhes do pedido</DialogDescription>
			</DialogHeader>

			{order ? (
				<div className="space-y-6">
					<Table>
						<TableBody>
							<TableRow>
								<TableCell className="text-muted-foreground">Status</TableCell>
								<TableCell className="flex justify-end">
									<OrderStatusComponent status={order.status} />
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell className="text-muted-foreground">Cliente</TableCell>
								<TableCell className="flex justify-end">
									{order.customer.name}
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell className="text-muted-foreground">
									Telefone
								</TableCell>
								<TableCell className="flex justify-end">
									{order.customer.phone ?? 'Não informado'}
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell className="text-muted-foreground">E-mail</TableCell>
								<TableCell className="flex justify-end">
									{order.customer.email.toLowerCase()}
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell className="text-muted-foreground">
									Realizado há
								</TableCell>
								<TableCell className="flex justify-end">
									{formatDistanceToNow(order.createdAt, {
										locale: ptBR,
										addSuffix: true,
									})}
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>

					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Produto</TableHead>
								<TableHead className="text-right">Qtd.</TableHead>
								<TableHead className="text-right">Preço</TableHead>
								<TableHead className="text-right">Subtotal</TableHead>
							</TableRow>
						</TableHeader>

						<TableBody>
							{order.orderItems.map((item) => (
								<TableRow key={item.id}>
									<TableCell>{item.product.name}</TableCell>
									<TableCell className="text-right">{item.quantity}</TableCell>
									<TableCell className="text-right">
										{(item.priceInCents / 100).toLocaleString('pt-BR', {
											style: 'currency',
											currency: 'BRL',
										})}
									</TableCell>
									<TableCell className="text-right">
										{((item.quantity * item.priceInCents) / 100).toLocaleString(
											'pt-BR',
											{
												style: 'currency',
												currency: 'BRL',
											},
										)}
									</TableCell>
								</TableRow>
							))}
						</TableBody>

						<TableFooter>
							<TableRow>
								<TableCell colSpan={3}>Total do pedido</TableCell>
								<TableCell className="text-right font-medium">
									{(order.totalInCents / 100).toLocaleString('pt-BR', {
										style: 'currency',
										currency: 'BRL',
									})}
								</TableCell>
							</TableRow>
						</TableFooter>
					</Table>
				</div>
			) : (
				<OrderDetailsSkeletonComponent />
			)}
		</DialogContent>
	)
}
