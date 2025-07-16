import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const contactItems = [
    {
        icon: <Mail className="size-7 text-muted-foreground" />,
        title: "Email",
        value: "alex@example.com",
        link: "mailto:alex@example.com",
    },
    {
        icon: <Linkedin className="size-7 text-muted-foreground" />,
        title: "LinkedIn",
        value: "@alexdeveloper",
        link: "https://linkedin.com/in/alexdeveloper",
    },
    {
        icon: <Github className="size-7 text-muted-foreground" />,
        title: "GitHub",
        value: "@alexdev",
        link: "https://github.com/alexdev",
    },
];

export default function ContactCard() {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 mb-8">

                {
                    contactItems.map((item, index) => (
                        <Link href={item.link} key={index} aria-label={`${item.title} links`} >
                            <Card className="w-full md:max-w-xs hover:bg-muted/60 transition-all duration-300">
                                <CardContent className="flex items-center gap-3 p-2">
                                    <div className="h-16 w-16 rounded-md border border-border bg-background flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-medium">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.value}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))

                }
            </div>
        </>
    );
}
