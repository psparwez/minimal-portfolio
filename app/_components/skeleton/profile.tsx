import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProfileSkeleton() {

    return (
        <div className="space-y-8">
            {/* Bio Skeleton */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">
                        <Skeleton className="w-24 h-6" />
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-[95%]" />
                    <Skeleton className="h-4 w-[90%]" />
                    <Skeleton className="h-4 w-[80%]" />
                    <div className="flex space-x-4">
                        <Skeleton className="h-4 w-40" />
                        <Skeleton className="h-4 w-40" />
                    </div>
                </CardContent>
            </Card>

            {/* Skills Skeleton */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">
                        <Skeleton className="w-40 h-6" />
                    </CardTitle>
                    <Skeleton className="w-48 h-4 mt-1" />
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Skeleton className="w-4 h-4" />
                                        <Skeleton className="w-24 h-4" />
                                    </div>
                                    <Skeleton className="w-8 h-4" />
                                </div>
                                <Skeleton className="h-2 w-full rounded-full" />
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
