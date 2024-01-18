import { Helmet } from 'react-helmet-async'

import { OrdersInterface } from '../interfaces/orders.interface'

export function OrdersContainer() {
	return (
		<>
			<Helmet title="Pedidos" />
			<OrdersInterface />
		</>
	)
}
