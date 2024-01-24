import { useMutation, useQueryClient } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowRight, Search, X } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/shared/modules/components/ui/button'
import { Dialog, DialogTrigger } from '@/shared/modules/components/ui/dialog'
import { TableCell, TableRow } from '@/shared/modules/components/ui/table'

import { IOrderTableRowComponent } from '../@types/order-table-row.type'
import { approveOrderService } from '../services/components/approve-order.service'
import { cancelOrderService } from '../services/components/cancel-order.service'
import { deliverOrderService } from '../services/components/deliver-order.service'
import { dispatchOrderService } from '../services/components/dispatch-order.service'
import { TGetOrdersService } from '../services/get-orders.service'
import { OrderDetailsComponent } from './order-details.component'
import { OrderStatusComponent, TOrderStatus } from './order-status.component'

export function OrderTableRowComponent({ order }: IOrderTableRowComponent) {
	const [isDetailsOpen, setIsDetailsOpen] = useState(false)

	const queryClient = useQueryClient()

	const { createdAt, customerName, orderId, status, total } = order

	const updateOrderStatusOnCache = (orderId: string, status: TOrderStatus) => {
		const ordersListCache = queryClient.getQueriesData<TGetOrdersService>({
			queryKey: ['orders'],
		})

		ordersListCache.forEach(([cacheKey, cacheData]) => {
			if (!cacheData) return

			queryClient.setQueryData<TGetOrdersService>(cacheKey, {
				...cacheData,
				orders: cacheData.orders.map((order) => {
					return order.orderId === orderId ? { ...order, status } : order
				}),
			})
		})
	}

	const { mutateAsync: cancelOrderFn, isPending: isCancelingOrder } =
		useMutation({
			mutationFn: cancelOrderService,
			async onSuccess() {
				updateOrderStatusOnCache(orderId, 'canceled')
				toast.success('Pedido cancelado com sucesso!')
			},
		})

	const { mutateAsync: approveOrderFn, isPending: isApprovingOrder } =
		useMutation({
			mutationFn: approveOrderService,
			async onSuccess() {
				updateOrderStatusOnCache(orderId, 'processing')
				toast.warning('Pedido em preparo!')
			},
		})

	const { mutateAsync: dispatchOrderFn, isPending: isDispatchingOrder } =
		useMutation({
			mutationFn: dispatchOrderService,
			async onSuccess() {
				updateOrderStatusOnCache(orderId, 'delivering')
				toast.info('Pedido a caminho!')
			},
		})

	const { mutateAsync: deliverOrderFn, isPending: isDeliveringOrder } =
		useMutation({
			mutationFn: deliverOrderService,
			async onSuccess() {
				updateOrderStatusOnCache(orderId, 'delivered')
				toast.success('Pedido entregue com sucesso!')
			},
		})

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
				{status === 'pending' && (
					<Button
						onClick={() => approveOrderFn({ orderId })}
						disabled={isApprovingOrder}
						variant="outline"
						size="xs"
					>
						<ArrowRight className="mr-2 h-3 w-3" />
						Aprovar
					</Button>
				)}

				{status === 'processing' && (
					<Button
						onClick={() => dispatchOrderFn({ orderId })}
						disabled={isDispatchingOrder}
						variant="outline"
						size="xs"
					>
						<ArrowRight className="mr-2 h-3 w-3" />
						Em entrega
					</Button>
				)}

				{status === 'delivering' && (
					<Button
						onClick={() => deliverOrderFn({ orderId })}
						disabled={isDeliveringOrder}
						variant="outline"
						size="xs"
					>
						<ArrowRight className="mr-2 h-3 w-3" />
						Entregue
					</Button>
				)}
			</TableCell>

			<TableCell>
				<Button
					disabled={
						!['pending', 'processing'].includes(status) || isCancelingOrder
					}
					onClick={() => cancelOrderFn({ orderId })}
					variant="ghost"
					size="xs"
				>
					<X className="mr-2 h-3 w-3" />
					Cancelar
				</Button>
			</TableCell>
		</TableRow>
	)
}
