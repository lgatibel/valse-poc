import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MobileContainer from "@/components/MobileContainer"
import { PropsWithChildren } from 'react'
import { ClerkProvider, auth } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Valse',
  description: 'Valse app',
}

export default function RootLayout({ children }: PropsWithChildren) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`overflow-hidden lg:h-screen flex flex-col items-center bg-primary justify-center min-h-screen ${inter.className}`}>
          <MobileContainer bgColor={'primary'}>
            {children}
          </MobileContainer>
        </body>
      </html>
    </ClerkProvider>
  )
}
