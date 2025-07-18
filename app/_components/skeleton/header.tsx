import React from 'react'

export default function HeaderSkeleton() {
    return (
        <>
            <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
                <div className="container mx-auto px-4 py-4 lg:px-20 xl:px-32">
                    <div className="flex items-center justify-between gap-1 pt-6 sm:pt-0">
                        <div className="flex sm:items-center space-x-4 sm:flex-row gap-4 sm:gap-0 flex-col">
                            <div className="animate-pulse rounded-lg bg-muted size-20 sm:size-13" />
                            <div>
                                <div className="h-4 w-32 bg-muted rounded mb-1 animate-pulse" />
                                <div className="h-3 w-48 bg-muted rounded animate-pulse" />
                            </div>
                        </div>
                        <div className="flex items-center gap-1 self-start flex-col sm:flex-row sm:self-center">
                            <div className="h-9 w-9 rounded-md bg-muted animate-pulse" />
                            <div className="h-9 w-9 sm:w-28 bg-muted rounded-md animate-pulse" />
                        </div>

                    </div>
                    <div className="sm:hidden flex mt-5 gap-2 items-center w-full">
                        {/* Download resume button one more button */}
                        <div className="w-40 h-8 rounded-full bg-muted animate-pulse "></div>
                        <div className="w-28 h-8 rounded-full bg-muted animate-pulse "></div>
                    </div>
                </div>
            </header>
        </>
    )
}
