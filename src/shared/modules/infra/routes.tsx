import { createBrowserRouter } from 'react-router-dom'

import { DashboardContainer } from '@/subdomains/app/home/containers/dashboard.container'
import { SignInContainer } from '@/subdomains/auth/containers/signin.container'

import { AppLayout } from '../_layouts/app.layout'
import { AuthLayout } from '../_layouts/auth.layout'

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [{ path: '/', element: <DashboardContainer /> }],
	},

	{
		path: '/',
		element: <AuthLayout />,
		children: [{ path: '/sign-in', element: <SignInContainer /> }],
	},
])
