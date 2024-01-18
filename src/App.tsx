import './globals.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { routes } from './shared/modules/infra/routes'
import { ThemeProvider } from './shared/modules/themes/theme-provider'

export function App() {
	return (
		<HelmetProvider>
			<ThemeProvider storageKey="pizza-shop-theme" defaultTheme="light">
				<Helmet titleTemplate="%s | pizza.shop" />
				<Toaster richColors />
				<RouterProvider router={routes} />
			</ThemeProvider>
		</HelmetProvider>
	)
}
