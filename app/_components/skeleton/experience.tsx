import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function ExperienceSkeleton() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-4 w-64 mt-1" />
            </div>

            {/* Experience cards */}
            <div className="space-y-6">
                {[...Array(3)].map((_, i) => (
                    <Card key={i}>
                        <CardHeader>
                            <div className="flex justify-between flex-col sm:flex-row items-start gap-1">
                                <div className="space-y-2">
                                    <Skeleton className="h-5 w-36" />
                                    <Skeleton className="h-4 w-28" />
                                </div>
                                <div className="space-y-1 sm:text-right text-sm text-muted-foreground">
                                    <Skeleton className="h-4 w-24" />
                                    <Skeleton className="h-4 w-20" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-32" />
                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <Skeleton className="w-4 h-4 rounded-full" />
                                        <Skeleton className="h-3 w-3/4" />
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <Skeleton className="w-4 h-4 rounded-full" />
                                        <Skeleton className="h-3 w-2/3" />
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
