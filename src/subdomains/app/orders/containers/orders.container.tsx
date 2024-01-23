import { Helmet } from 'react-helmet-async'

import { useOrdersHook } from '../hooks/orders.hook'
import { OrdersInterface } from '../interfaces/orders.interface'

export function OrdersContainer() {
	const ordersHook = useOrdersHook()

	return (
		<>
			<Helmet title="Pedidos" />
			<OrdersInterface {...ordersHook} />
		</>
	)
}
