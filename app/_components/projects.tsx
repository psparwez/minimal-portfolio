"use client"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import {
    ExternalLink,
    Github,
} from "lucide-react"
import { projects } from "@/data"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
    const { theme } = useTheme()

    return (
        <>
            <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-medium mb-2">Featured Projects</h2>
                    <p className="text-muted-foreground text-sm">Some of my recent work and side projects</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <Card key={index} className="overflow-hidden hover:bg-muted/60 transition-all duration-300 min-h-min flex flex-col sm:flex-row group p-2">
                            <div className="sm:h-full  min-h-40 min-w-full sm:min-w-40 bg-muted rounded-sm max-w-min ">
                                <img
                                    src={theme === 'dark' ? (project.image_dark || project.image) : project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover rounded-sm transition-transform duration-300 group-hover:scale-[1.03]"
                                />
                            </div>
                            <div className="flex flex-col  ">
                                <CardHeader className="space-y-0 px-2 sm:px-4 py-2">
                                    <CardTitle className="flex text-base font-medium sm:text-lg items-center justify-between">
                                        {project.title}
                                        <div className="flex group-hover:opacity-100 sm:opacity-0 transition duration-300">
                                            <Button variant="ghost" className="rounded-full" size="icon" asChild>
                                                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                                    <Github className="w-4 h-4" />
                                                </Link>
                                            </Button>
                                            <Button variant="ghost" className="rounded-full" size="icon" asChild>
                                                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                                    <ExternalLink className="w-4 h-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </CardTitle>
                                    <CardDescription className="line-clamp-4">{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="px-2 sm:px-4 py-2">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <Badge key={tech} variant="secondary" className="text-[10px] text-muted-foreground hover:text-foreground font-medium">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}
