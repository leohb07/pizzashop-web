import { Search } from 'lucide-react'

import { Button } from '@/shared/modules/components/ui/button'
import { Skeleton } from '@/shared/modules/components/ui/skeleton'
import { TableCell, TableRow } from '@/shared/modules/components/ui/table'

export function OrderTableSkeletonComponent() {
	return Array.from({ length: 10 }).map((_, index) => {
		return (
			<TableRow key={index}>
				<TableCell>
					<Button variant="outline" size="xs">
						<Search className="h-3 w-3" />
						<span className="sr-only">Detalhes do pedido</span>
					</Button>
				</TableCell>

				<TableCell>
					<Skeleton className="h-4 w-[172px]" />
				</TableCell>

				<TableCell>
					<Skeleton className="h-4 w-[148px]" />
				</TableCell>

				<TableCell>
					<Skeleton className="h-4 w-[110px]" />
				</TableCell>

				<TableCell>
					<Skeleton className="h-4 w-[200px]" />
				</TableCell>

				<TableCell>
					<Skeleton className="h-4 w-[64px]" />
				</TableCell>

				<TableCell>
					<Skeleton className="h-4 w-[92px]" />
				</TableCell>

				<TableCell>
					<Skeleton className="h-4 w-[92px]" />
				</TableCell>
			</TableRow>
		)
	})
}
