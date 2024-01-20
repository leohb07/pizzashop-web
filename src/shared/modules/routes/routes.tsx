import { createBrowserRouter } from 'react-router-dom'

import { DashboardContainer } from '@/subdomains/app/home/containers/dashboard.container'
import { OrdersContainer } from '@/subdomains/app/orders/containers/orders.container'
import { SignInContainer } from '@/subdomains/auth/containers/signin.container'
import { SignUpContainer } from '@/subdomains/auth/containers/signup.container'

import { AppLayout } from '../_layouts/app.layout'
import { AuthLayout } from '../_layouts/auth.layout'
import { NotFound } from '../_layouts/not-found.layout'

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		errorElement: <NotFound />,
		children: [
			{ path: '/', element: <DashboardContainer /> },
			{ path: '/orders', element: <OrdersContainer /> },
		],
	},

	{
		path: '/',
		element: <AuthLayout />,
		children: [
			{ path: '/sign-in', element: <SignInContainer /> },
			{ path: '/sign-up', element: <SignUpContainer /> },
		],
	},
])
