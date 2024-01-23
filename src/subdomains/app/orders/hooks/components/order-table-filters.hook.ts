import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import {
	orderFiltersValidation,
	TOrderFiltersValidation,
} from '../../validations/components/order-table-filters.validation'

export const useOrderTableFiltersHook = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const orderId = searchParams.get('orderId')
	const customerName = searchParams.get('customerName')
	const status = searchParams.get('status')

	const { register, handleSubmit, control, reset } =
		useForm<TOrderFiltersValidation>({
			resolver: orderFiltersValidation,
			defaultValues: {
				customerName: customerName ?? '',
				orderId: orderId ?? '',
				status: status ?? 'all',
			},
		})

	const handleFilter = (data: TOrderFiltersValidation) => {
		const { customerName, orderId, status } = data

		setSearchParams((state) => {
			if (orderId) {
				state.set('orderId', orderId)
			} else {
				state.delete('orderId')
			}

			if (customerName) {
				state.set('customerName', customerName)
			} else {
				state.delete('customerName')
			}

			if (status) {
				state.set('status', status)
			} else {
				state.delete('status')
			}

			state.set('page', '1')

			return state
		})
	}

	const handleClearFilters = () => {
		setSearchParams((state) => {
			state.delete('orderId')
			state.delete('customerName')
			state.delete('status')
			state.set('page', '1')

			return state
		})

		reset({
			customerName: '',
			orderId: '',
			status: 'all',
		})
	}

	return {
		control,
		register,
		handleSubmit,
		handleFilter,
		handleClearFilters,
	}
}
