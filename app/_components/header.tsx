"use client"

import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { cn } from "@/lib/utils"
import HeaderSkeleton from './skeleton/header'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    const { resolvedTheme } = useTheme()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return (
            <>
                <HeaderSkeleton />
            </>
        )
    }

    return (
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 py-4 lg:px-20 xl:px-32">
                <div className="flex items-center justify-between gap-1">
                    <div className="flex items-center space-x-4">
                        <div className="relative">

                            {/* use image instead */}
                            <div
                                className={cn(
                                    "size-10 sm:size-13 rounded-lg bg-gradient-to-br flex items-center justify-center relative outline outline-offset-[3px] outline-border",
                                    resolvedTheme === "dark"
                                        ? "from-zinc-600 to-zinc-900"
                                        : "from-zinc-50 to-zinc-200"
                                )}
                            >

                                <Image src="/avatar-p.png" alt='Profile photo' height="40" width="40" className='absolute h-full w-full top-0 left-0 rounded-xl object-cover saturate-100' aria-label='Profile photo of Alex Developer' quality={100} />
                            </div>

                            {/* use dots grid instead */}

                            {/* <div
                                className={cn(
                                    "size-10 sm:size-13 rounded-lg bg-gradient-to-br flex items-center justify-center ",
                                    resolvedTheme === "dark"
                                        ? "from-zinc-600 to-zinc-900"
                                        : "from-zinc-50 to-zinc-200"
                                )}
                            >

                                <div className="grid grid-cols-2 gap-1">
                                    <div className="size-2 sm:size-3 bg-zinc-300 rounded-sm" />
                                    <div className="size-2 sm:size-3 bg-zinc-400 rounded-sm" />
                                    <div className="size-2 sm:size-3 bg-zinc-500 rounded-sm" />
                                    <div className="size-2 sm:size-3 bg-zinc-600 rounded-sm" />
                                </div>
                            </div> */}
                        </div>
                        <div>
                            <h1 className="text-base sm:text-xl font-medium flex items-center gap-2">
                                Alex Developer
                                <div className="size-1.5 sm:size-2.5 animate-pulse relative after:content-[''] after:absolute flex items-center justify-center after:h-full after:w-full after:bg-green-400 after:rounded-full after:animate-ping rounded-full bg-primary"></div>
                            </h1>
                            <p className="text-muted-foreground text-[11px] sm:text-sm">
                                Full Stack Developer & UI/UX Designer
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <ThemeToggle />
                        <Link href="https://github.com/psparwez" aria-label="View GitHub Profile" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm">

                                <Github className="w-4 h-4 sm:mr-1" />
                                <span className="hidden sm:inline">View GitHub</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
