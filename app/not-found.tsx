import { Button } from '@/components/ui/button'
import { House } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { TooltipArrow } from '@radix-ui/react-tooltip'


export default function NotFound() {
    return (
        <TooltipProvider>
            <div className='min-h-screen w-full flex items-center justify-center'>
                <div className="flex flex-col items-center justify-center ">
                    <p className="dark:text-white text-lg relative">
                        404, page not found.<span className="absolute -right-3 -bottom-2 -translate-y-1/2 blinking-cursor inline-block h-6 w-2.5 bg-primary  animate-[blink_1s_step-start_infinite]" />
                    </p>

                    <Link href="/" className='mt-6'>
                        <Button className="rounded-full cursor-pointer" size="icon" variant="outline">
                            <House />
                        </Button>
                    </Link>
                </div>
            </div>
        </TooltipProvider>
    )
}