import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { Separator } from '../ui/separator'
import { NavLinkComponent } from './nav-link.component'

export function HeaderComponent() {
	return (
		<div className="border-b">
			<div className="flex h-16 items-center gap-6 px-6">
				<Pizza className="h-6 w-6" />

				<Separator orientation="vertical" className="h-6" />

				<nav className="flex items-center space-x-4 lg:space-x-5">
					<NavLinkComponent to="/">
						<Home className="h-4 w-4" />
						Início
					</NavLinkComponent>

					<NavLinkComponent to="/orders">
						<UtensilsCrossed className="h-4 w-4" />
						Pedidos
					</NavLinkComponent>
				</nav>
			</div>
		</div>
	)
}
