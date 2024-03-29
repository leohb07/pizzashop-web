import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/shared/modules/components/ui/card'

import { getMonthOrdersAmountService } from '../services/components/get-month-orders-amount.service'
import { MetricCardSkeleton } from './metric-card-skeleton.component'

export function MonthOrdersAmountCardComponent() {
	const { data: monthOrdersAmount } = useQuery({
		queryKey: ['metrics', 'month-orders-amount'],
		queryFn: getMonthOrdersAmountService,
	})

	return (
		<Card>
			<CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
				<Utensils className="h-4 w-4 text-muted-foreground" />
			</CardHeader>

			<CardContent className="space-y-1">
				{monthOrdersAmount ? (
					<>
						<span className="text-2xl font-bold tracking-tight">
							{monthOrdersAmount.amount.toLocaleString('pt-BR')}
						</span>
						<p className="text-xs text-muted-foreground">
							{monthOrdersAmount.diffFromLastMonth >= 0 ? (
								<>
									<span className="text-emerald-500 dark:text-emerald-400">
										+{monthOrdersAmount.diffFromLastMonth}%
									</span>{' '}
									em relação ao mês passado
								</>
							) : (
								<>
									<span className="text-rose-500 dark:text-rose-400">
										{monthOrdersAmount.diffFromLastMonth}%
									</span>{' '}
									em relação ao mês passado
								</>
							)}
						</p>
					</>
				) : (
					<MetricCardSkeleton />
				)}
			</CardContent>
		</Card>
	)
}
