import { Helmet } from 'react-helmet-async'

import { DashboardInterface } from '../interfaces/dashboard.interface'

export function DashboardContainer() {
	return (
		<>
			<Helmet title="Dashboard" />
			<DashboardInterface />
		</>
	)
}
