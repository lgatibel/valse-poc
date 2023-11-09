import React, { PropsWithChildren } from 'react'

interface Iprops {
    bgColor?: 'primary' | null
    noPadding?: boolean
}

export default function MobileContainer({ children, bgColor = null, noPadding = false }: PropsWithChildren<Iprops>) {

    return (
        <main id="sidebar-content" className={`${noPadding ? '' : 'py-6'} no-scrollbar shadow-profil-card shadow-shadow overflow-hidden flex flex-col items-center w-full max-w-md relative md:aspect-mobile h-screen md:max-w-[400px]`}>
            {children}
        </main>
    )
}
