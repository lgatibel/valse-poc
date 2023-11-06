import React, { PropsWithChildren } from 'react'

interface Iprops {
    bgColor?: 'primary' | null
}

export default function MobileContainer({ children, bgColor = null }: PropsWithChildren<Iprops>) {
    return (
        <main className="no-scrollbar shadow-profil-card shadow-shadow overflow-x-hidden flex py-6 flex-col items-center w-full max-w-md relative h-screen">
            {children}
        </main>
    )
}
