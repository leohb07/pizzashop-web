import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
	name: z.string().min(1),
	description: z.string(),
})

export const storeProfileDialogValidation = zodResolver(schema)

export type TStoreProfileDialogValidation = z.infer<typeof schema>
