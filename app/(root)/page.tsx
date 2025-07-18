"use client"

import { useState, useEffect } from "react"
import Header from "../_components/header"
import Navigation from "../_components/navigation"
import dynamic from "next/dynamic"

import ContactSkeleton from "../_components/skeleton/Contact"
import ExperienceSkeleton from "../_components/skeleton/experience"
import ProjectsSkeleton from "../_components/skeleton/projects"
import ProfileSkeleton from "../_components/skeleton/profile"

const Profile = dynamic(() => import("../_components/profile"), {
  loading: () => <ProfileSkeleton />,
})
const Projects = dynamic(() => import("../_components/projects"), {
  loading: () => <ProjectsSkeleton />,
})
const Experience = dynamic(() => import("../_components/experience"), {
  loading: () => <ExperienceSkeleton />,
})
const Contact = dynamic(() => import("../_components/contact"), {
  loading: () => <ContactSkeleton />,
})
const Footer = dynamic(() => import("../_components/footer"), {
  loading: () => <div className="h-16 bg-card animate-pulse" />,
})

export const TABS = ["profile", "experience", "projects", "contact"] as const
type Tab = (typeof TABS)[number]

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<Tab>("profile")

  // Load tab from localStorage on mount
  useEffect(() => {
    const storedTab = localStorage.getItem("activeTab") as Tab | null
    if (storedTab && TABS.includes(storedTab)) {
      setActiveTab(storedTab)
    }

  }, [])


  // Save tab to localStorage on change
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab)
  }, [activeTab])

  const renderActiveTab = () => {
    switch (activeTab) {
      case "profile":
        return <Profile setActiveTab={setActiveTab} />
      case "experience":
        return <Experience />
      case "projects":
        return <Projects />
      case "contact":
        return <Contact />
      default:
        return null
    }
  }


  return (
    <div className="min-h-screen w-full relative">
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-3 lg:px-20 xl:px-32 py-8">{renderActiveTab()}</main>
      <Footer />
    </div>
  )
}
