import { PaginationComponent } from '@/shared/modules/components/business/pagination.component'
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from '@/shared/modules/components/ui/table'

import { OrderTableFiltersComponent } from '../components/order-table-filters.component'
import { OrderTableRowComponent } from '../components/order-table-row.component'
import { OrderTableSkeletonComponent } from '../components/order-table-skeleton.component'
import { useOrdersHook } from '../hooks/orders.hook'

type TOrdersInterface = ReturnType<typeof useOrdersHook>

export function OrdersInterface(props: TOrdersInterface) {
	const { resultOrders, handlePaginate, isLoadingOrders } = props

	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

			<div className="space-y-2.5">
				<OrderTableFiltersComponent />

				<div className="rounded-md border">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[64px]"></TableHead>
								<TableHead className="w-[140px]">Identificador</TableHead>
								<TableHead className="w-[180px]">Realizado há</TableHead>
								<TableHead className="w-[140px]">Status</TableHead>
								<TableHead>Cliente</TableHead>
								<TableHead className="w-[140px]">Total do pedido</TableHead>
								<TableHead className="w-[164px]"></TableHead>
								<TableHead className="w-[132px]"></TableHead>
							</TableRow>
						</TableHeader>

						<TableBody>
							{isLoadingOrders && <OrderTableSkeletonComponent />}

							{resultOrders &&
								resultOrders.orders?.map((order) => (
									<OrderTableRowComponent key={order.orderId} order={order} />
								))}
						</TableBody>
					</Table>
				</div>

				{}

				{resultOrders && (
					<PaginationComponent
						onPageChange={handlePaginate}
						pageIndex={resultOrders.meta.pageIndex}
						totalCount={resultOrders.meta.totalCount}
						perPage={resultOrders.meta.perPage}
					/>
				)}
			</div>
		</div>
	)
}
