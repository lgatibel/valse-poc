import Image from 'next/image'
import React, { PropsWithChildren } from 'react'
import src from '@/assets/canvas/iphone-canvas.png'

interface Iprops {
    bgColor?: 'primary' | null
}

export default function MobileContainer({ children, bgColor = null }: PropsWithChildren<Iprops>) {
    return (
        <main className="sm:p-8 flex flex-col items-center w-full max-w-md max-h-screen border-2 border-red-500 relative aspect-mobile">
            {/* <div className={`w-full sm:w-auto flex min-h-screen sm:min-h-[32rem] sm:max-h-[32rem] sm:aspect-mobile flex-col items-center relative`}>
                <div className="hidden sm:block z-[-8]" style={{
                    position: "absolute",
                    width: "120%",
                    height: "110%",
                    left: "-10%",
                    top: "-3%",
                }}>
                    <Image src={src} alt="placeholder" placeholder="blur"
                        quality={100}
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: 'cover',
                        }} />
                </div> */}
                {children}
            {/* </div> */}
        </main>
    )
}
