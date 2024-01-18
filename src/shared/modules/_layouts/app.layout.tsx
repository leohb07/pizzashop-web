import { Outlet } from 'react-router-dom'

import { HeaderComponent } from '../components/business/header.component'

export function AppLayout() {
	return (
		<div className="flex min-h-screen flex-col antialiased">
			<HeaderComponent />

			<div className="flex flex-1 flex-col gap-4">
				<Outlet />
			</div>
		</div>
	)
}
