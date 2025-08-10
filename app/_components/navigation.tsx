"use client"

import React, { Fragment, useEffect, useState } from "react"
import { TABS } from "../(root)/page"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"
import { User, Briefcase, Folder, Mail } from "lucide-react"

interface NavigationProps {
    activeTab?: typeof TABS[number]
    setActiveTab: (tab: typeof TABS[number]) => void
}

export default function Navigation({
    activeTab = "profile",
    setActiveTab,
}: NavigationProps) {
    const [isMounted, setIsMounted] = useState(false)
    const isMobile = useIsMobile()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    const tabs = [
        { id: "profile", label: "Profile", icon: <User size={16} /> },
        { id: "experience", label: "Experience", icon: <Briefcase size={16} /> },
        { id: "projects", label: "Projects", icon: <Folder size={16} /> },
        { id: "contact", label: "Contact", icon: <Mail size={16} /> },
    ] as const

    return (
        <nav className={cn(
            "bg-card border-b border-border",
            isMobile
                ? "fixed bottom-0  left-0 right-0 w-full border-t border-border shadow-lg"
                : "relative"
        )}>
            <div className="container mx-auto px-4 lg:px-20 xl:px-32">
                <div className={cn(
                    "sm:flex space-x-2 sm:space-x-8 overflow-x-auto",
                    isMobile && "flex justify-between"
                )}>
                    {tabs.map((tab) => (
                        <Fragment key={tab.id}>
                            {isMobile ? (
                                <button
                                    onClick={() => setActiveTab(tab.id)}
                                    className={cn(
                                        "py-4 px-2 text-[10px] font-medium border-b-2 transition-colors flex flex-col gap-1 items-center justify-between w-full m-0 cursor-pointer",
                                        activeTab === tab.id
                                            ? "border-primary text-primary"
                                            : "border-transparent text-muted-foreground hover:text-foreground"
                                    )}
                                    aria-label={`Navigate to ${tab.label} section`}
                                >
                                    <span>{tab.icon}</span>
                                    <span>{tab.label}</span>
                                </button>
                            ) : (
                                <button
                                    onClick={() => setActiveTab(tab.id)}
                                    className={cn(
                                        "py-4 px-2 text-sm font-medium border-b-2 transition-colors cursor-pointer",
                                        activeTab === tab.id
                                            ? "border-primary text-primary"
                                            : "border-transparent text-muted-foreground hover:text-foreground"
                                    )}
                                    aria-label={`Navigate to ${tab.label} section`}
                                >
                                    {tab.label}
                                </button>
                            )}
                        </Fragment>
                    ))}
                </div>
            </div>
        </nav>
    )
}
