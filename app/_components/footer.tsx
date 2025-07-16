import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="bg-card border-t border-border mt-16">
                <div className="container mx-auto px-4 py-8 lg:px-20 xl:px-32">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <p className="text-muted-foreground">© 2024 Alex Developer. All rights reserved.</p>
                        </div>
                        <div className="flex space-x-4">
                            <Button variant="ghost" size="icon" asChild>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4 h-4" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <a href="mailto:alex@example.com">
                                    <Mail className="w-4 h-4" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
