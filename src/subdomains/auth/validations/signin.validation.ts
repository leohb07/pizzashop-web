import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
	email: z.string().email(),
})

export const inputSignInForm = zodResolver(schema)

export type TInputSignInForm = z.infer<typeof schema>
