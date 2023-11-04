import Image from 'next/image'
import React, { PropsWithChildren } from 'react'
import src from '@/assets/canvas/iphone-canvas.png'

interface Iprops {
    bgColor?: 'primary' | null
}

export default function MobileContainer({ children, bgColor = null }: PropsWithChildren<Iprops>) {
    return (
        <main className="no-scrollbar overflow-x-hidden flex py-6 flex-col items-center w-full max-w-md max-h-screen relative min-h-screen">
                {children}
        </main>
    )
}
