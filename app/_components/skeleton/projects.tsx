import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProjectsSkeleton() {
    return (
        <div className="space-y-6">
            {/* Section Heading */}
            <div>
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-4 w-64 mt-1" />
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[...Array(4)].map((_, index) => (
                    <Card
                        key={index}
                        className="overflow-hidden min-h-min flex flex-col sm:flex-row gap-2 p-2"
                    >
                        {/* Image Placeholder */}
                        <div className="sm:h-full min-h-40 min-w-full sm:min-w-40 max-w-min">
                            <Skeleton className="w-full h-40 sm:h-full sm:w-40 rounded-sm" />
                        </div>

                        {/* Project Info */}
                        <div className="flex flex-col flex-1">
                            <CardHeader className="px-2 sm:px-4 py-2 space-y-2">
                                <div className="flex items-center justify-between">
                                    <Skeleton className="h-5 w-32" />
                                    <div className="flex space-x-2">
                                        <Skeleton className="h-8 w-8 rounded-full" />
                                        <Skeleton className="h-8 w-8 rounded-full" />
                                    </div>
                                </div>
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-5/6" />
                                <Skeleton className="h-4 w-4/6" />
                            </CardHeader>

                            <CardContent className="px-2 sm:px-4 py-2">
                                <div className="flex flex-wrap gap-2">
                                    {[...Array(4)].map((_, i) => (
                                        <Skeleton key={i} className="h-5 w-12 rounded-full" />
                                    ))}
                                </div>
                            </CardContent>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
