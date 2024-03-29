import { DayOrdersAmountCardComponent } from '../components/day-orders-amount-card.component'
import { MonthCanceledOrdersAmountCardComponent } from '../components/month-canceled-orders-amount-card.component'
import { MonthOrdersAmountCardComponent } from '../components/month-orders-amount-card.component'
import { MonthRevenueCardComponent } from '../components/month-revenue-card.component'
import { PopularProductChartComponent } from '../components/popular-products-chart.component'
import { RevenueChartComponent } from '../components/revenue-chart.component'

export function DashboardInterface() {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

			<div className="grid grid-cols-4 gap-4">
				<MonthRevenueCardComponent />
				<MonthOrdersAmountCardComponent />
				<DayOrdersAmountCardComponent />
				<MonthCanceledOrdersAmountCardComponent />
			</div>

			<div className="grid grid-cols-9 gap-4">
				<RevenueChartComponent />
				<PopularProductChartComponent />
			</div>
		</div>
	)
}
