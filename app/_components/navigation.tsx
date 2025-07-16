import React from "react"
import { TABS } from "../(root)/page"
import { cn } from "@/lib/utils"

interface NavigationProps {
    activeTab?: typeof TABS[number]
    setActiveTab: (tab: typeof TABS[number]) => void
}

export default function Navigation({
    activeTab = "profile",
    setActiveTab,
}: NavigationProps) {
    const tabs = [
        { id: "profile", label: "Profile" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ] as const

    return (
        <nav className="bg-card relative border-b border-border">
            <div className="container mx-auto px-4 lg:px-20 xl:px-32">
                <div className="grid grid-cols-2 sm:flex space-x-2 sm:space-x-8 overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "py-4 px-2 text-sm font-medium border-b-2 transition-colors",
                                activeTab === tab.id
                                    ? "border-primary text-primary"
                                    : "border-transparent text-muted-foreground hover:text-foreground"
                            )}
                            aria-label={`Navigate to ${tab.label} section`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    )
}
