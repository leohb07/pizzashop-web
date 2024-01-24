import { Outlet } from 'react-router-dom'

import { HeaderComponent } from '../components/business/header.component'
import { useAppLayoutHook } from '../hooks/app-layout.hook'

export function AppLayout() {
	useAppLayoutHook()

	return (
		<div className="flex min-h-screen flex-col antialiased">
			<HeaderComponent />

			<div className="flex flex-1 flex-col gap-4 p-8 pt-6">
				<Outlet />
			</div>
		</div>
	)
}
