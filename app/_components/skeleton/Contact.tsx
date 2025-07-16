import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function ContactSkeleton() {
    return (
        <div className="space-y-6 mt-5 max-w-5xl gap-10 mx-auto grid grid-cols-1 md:grid-cols-[0.75fr_1fr]">
            {/* Left contact cards skeleton */}
            <div className="flex flex-col gap-10">
                <div className="space-y-2">
                    <Skeleton className="h-6 w-40" />
                    <Skeleton className="h-4 w-64" />
                </div>

                <div className="grid grid-cols-1 gap-4 mb-8">
                    {[1, 2, 3].map((_, i) => (
                        <Card key={i} className="w-full md:max-w-xs">
                            <CardContent className="flex items-center gap-3 p-2">
                                <Skeleton className="h-16 w-16 rounded-md" />
                                <div className="space-y-1">
                                    <Skeleton className="h-4 w-24" />
                                    <Skeleton className="h-3 w-32" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Right form skeleton */}
            <Card>
                <CardHeader>
                    <CardTitle>
                        <Skeleton className="h-5 w-48" />
                    </CardTitle>
                    <CardDescription>
                        <Skeleton className="h-4 w-64" />
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Skeleton className="h-10" />
                        <Skeleton className="h-10" />
                    </div>
                    <Skeleton className="h-10" />
                    <Skeleton className="h-32" />
                    <Skeleton className="h-10 w-full" />
                </CardContent>
            </Card>
        </div>
    )
}
