import './globals.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { queryClient } from './shared/modules/infra/query-client'
import { routes } from './shared/modules/routes/routes'
import { ThemeProvider } from './shared/modules/themes/theme-provider'

export function App() {
	return (
		<HelmetProvider>
			<ThemeProvider storageKey="pizza-shop-theme" defaultTheme="light">
				<Helmet titleTemplate="%s | pizza.shop" />
				<Toaster richColors />
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={routes} />
				</QueryClientProvider>
			</ThemeProvider>
		</HelmetProvider>
	)
}
