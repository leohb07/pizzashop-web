import './globals.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { routes } from './shared/modules/infra/routes'

export function App() {
	return (
		<HelmetProvider>
			<Helmet titleTemplate="%s | pizza.shop" />
			<Toaster richColors />
			<RouterProvider router={routes} />
		</HelmetProvider>
	)
}
