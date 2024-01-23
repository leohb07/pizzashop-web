import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
	orderId: z.string().optional(),
	customerName: z.string().optional(),
	status: z.string().optional(),
})

export type TOrderFiltersValidation = z.infer<typeof schema>

export const orderFiltersValidation = zodResolver(schema)
