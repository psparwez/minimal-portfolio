import React from 'react'

export default function HeaderSkeleton() {
    return (
        <>
            <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
                <div className="container mx-auto px-4 py-4 lg:px-20 xl:px-32">
                    <div className="flex items-center justify-between gap-1">
                        <div className="flex items-center space-x-4">
                            <div className="animate-pulse rounded-lg bg-muted size-10 sm:size-13" />
                            <div>
                                <div className="h-4 w-32 bg-muted rounded mb-1 animate-pulse" />
                                <div className="h-3 w-48 bg-muted rounded animate-pulse" />
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="h-9 w-9 rounded-md bg-muted animate-pulse" />
                            <div className="h-9 w-28 bg-muted rounded-md animate-pulse hidden sm:block" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
