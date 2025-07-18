"use client"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import mailFormSchema from "@/lib/validation/mail-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Send,
} from "lucide-react"
import { Spinner } from 'react-hot-spinner';
import { useForm } from "react-hook-form"
import { FormData } from "@/types/mail-form"
import { sendMail } from "@/lib/mails/send-mail"
import { toast } from "sonner"
import ContactCard from "./ContactCard"


export default function Contact() {

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: zodResolver(mailFormSchema)
    })

    const onSubmit = async (formData: FormData) => {
        console.log(formData)
        const res = await sendMail(formData)

        if (res.success) {
            toast.success("Message sent successfully!",)
            reset()
        } else {
            toast.error(`Error: ${res.error}`)
        }
    }

    return (
        <>
            <div className="space-y-6 mt-5 max-w-5xl gap-10 mx-auto grid grid-cols-1 md:grid-cols-[0.75fr_1fr]">
                <div className="flex flex-col gap-10">
                    <div className="text-left">
                        <h2 className="text-3xl font-medium  mb-2">Get In Touch</h2>
                        <p className="text-muted-foreground">I'm always interested in new opportunities and collaborations</p>
                    </div>
                    {/* left side */}
                    <ContactCard />
                </div>

                {
                    isSubmitting ? (
                        <>
                            <Card>
                                <CardContent className="flex min-h-80 flex-col items-center justify-center h-full">
                                    <Spinner size={25} />
                                </CardContent>
                                <CardHeader>
                                </CardHeader>
                            </Card>
                        </>
                    )
                        : (
                            <>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="font-medium text-xl">Send me a message</CardTitle>
                                        <CardDescription>Fill out the form below and I'll get back to you as soon as possible</CardDescription>
                                    </CardHeader>
                                    <CardContent >
                                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name" className="text-muted-foreground ">Name</Label>
                                                    <Input
                                                        id="name"
                                                        placeholder="Your name"
                                                        {...register('name')}
                                                        aria-label="Your name"

                                                    />
                                                    {/* error */}
                                                    {errors.name && <span className="text-xs sm:text-sm text-red-600">{errors.name.message}</span>}
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="email" className="text-muted-foreground ">Email</Label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        placeholder="your.email@example.com"
                                                        {...register('email')}
                                                        aria-label="Your email address"

                                                    />
                                                    {errors.email && <span className="text-xs sm:text-sm text-red-600">{errors.email.message}</span>}


                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="subject" className="text-muted-foreground ">Subject</Label>
                                                <Input
                                                    id="subject"
                                                    placeholder="What's this about?"
                                                    {...register('subject')}
                                                    aria-label="Subject of your message"

                                                />
                                                {errors.subject && <span className="text-xs sm:text-sm text-red-600">{errors.subject.message}</span>}

                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="message" className="text-muted-foreground ">Message</Label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Your message..."
                                                    rows={5}
                                                    {...register('message')}
                                                    aria-label="Your message"

                                                />
                                                {errors.message && <span className="text-sm text-red-600">{errors.message.message}</span>}

                                            </div>
                                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                                {isSubmitting ? (
                                                    "Sending..."
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4 mr-2" />
                                                        Send Message
                                                    </>
                                                )}
                                            </Button>

                                        </form>
                                    </CardContent>
                                </Card>

                            </>
                        )
                }
            </div>
        </>
    )
}
