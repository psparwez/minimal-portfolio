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
import { TABS } from '../(root)/page'
interface HeaderProps {
    activeTab?: typeof TABS[number]
    setActiveTab: (tab: typeof TABS[number]) => void
}
export default function Header({ setActiveTab }: HeaderProps) {
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
                <div className="flex items-center justify-between gap-1 pt-6 sm:pt-0">
                    <div className="flex sm:items-center space-x-4 sm:flex-row gap-4 sm:gap-0 flex-col">
                        <div className="relative">

                            {/* use image instead */}
                            <div
                                className={cn(
                                    "size-20 sm:size-13 rounded-lg bg-gradient-to-br flex items-center justify-center relative outline outline-offset-[3px] outline-border",
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
                            <h1 className="text-xl font-medium flex items-center gap-2">
                                Alex Developer
                                <div className="size-1.5 sm:size-2.5 animate-pulse relative after:content-[''] after:absolute flex items-center justify-center after:h-full after:w-full after:bg-green-400 after:rounded-full after:animate-ping rounded-full bg-primary"></div>
                            </h1>
                            <p className="text-muted-foreground text-sm">
                                Full Stack Developer & UI/UX Designer
                            </p>
                        </div>

                        <div className="sm:hidden flex justify-between gap-2 items-center">
                            {/* Download resume button one more button */}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open Resume"
                            >
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="rounded-full text-primary hover:bg-primary/70"
                                >
                                    Download Resume
                                </Button>
                            </a>
                            <Button variant="outline" size="sm" className='rounded-full text-muted-foreground'
                                onClick={() => setActiveTab("contact")}
                                aria-label="Contact Me"
                            >
                                Contact Me
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 self-start flex-col sm:flex-row sm:self-center gap-1">
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
