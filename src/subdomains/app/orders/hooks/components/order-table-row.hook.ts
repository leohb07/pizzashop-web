import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'sonner'

import { IOrderTableRowComponent } from '../../@types/order-table-row.type'
import { TOrderStatus } from '../../components/order-status.component'
import { approveOrderService } from '../../services/components/approve-order.service'
import { cancelOrderService } from '../../services/components/cancel-order.service'
import { deliverOrderService } from '../../services/components/deliver-order.service'
import { dispatchOrderService } from '../../services/components/dispatch-order.service'
import { TGetOrdersService } from '../../services/get-orders.service'

export const useOrderTableRowHook = (props: IOrderTableRowComponent) => {
	const [isDetailsOpen, setIsDetailsOpen] = useState(false)

	const queryClient = useQueryClient()

	const { createdAt, customerName, orderId, status, total } = props.order

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

	return {
		isDetailsOpen,
		setIsDetailsOpen,
		createdAt,
		customerName,
		orderId,
		status,
		total,
		isPending: {
			isCancelingOrder,
			isApprovingOrder,
			isDispatchingOrder,
			isDeliveringOrder,
		},
		mutateFn: {
			cancelOrderFn,
			approveOrderFn,
			dispatchOrderFn,
			deliverOrderFn,
		},
	}
}
