import { useQuery } from '@tanstack/react-query'

import { IOrderDetailsComponent } from '../../@types/order-details.type'
import { getOrderDetailsService } from '../../services/components/get-order-details.service'

export const useOrderDetailsHook = (props: IOrderDetailsComponent) => {
	const { isOpenDialog, orderId } = props

	const { data: order } = useQuery({
		queryKey: ['order', orderId],
		queryFn: () => getOrderDetailsService({ orderId }),
		enabled: isOpenDialog,
	})

	return {
		order,
		orderId,
	}
}
