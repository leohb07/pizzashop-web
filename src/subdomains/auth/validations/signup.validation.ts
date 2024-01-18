import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
	restaurantName: z.string(),
	managerName: z.string(),
	email: z.string().email(),
	phone: z.string(),
})

export const inputSignUpForm = zodResolver(schema)

export type TInputSignUpForm = z.infer<typeof schema>
