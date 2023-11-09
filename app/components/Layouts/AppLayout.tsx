import '../../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'
import MobileContainer from '@/app/components/MobileContainer'
import HomeNavBar from '@/app/components/Navigation/HomeNavBar'
import { ClerkProvider, auth } from '@clerk/nextjs'
import ScrollView from '@/app/components/ScrollView'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Valse',
  description: 'Valse app',
}

export default async function AppLayout({ children }: PropsWithChildren) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`overflow-hidden lg:h-screen flex flex-col items-center bg-primary justify-center min-h-screen ${inter.className}`}>
          <MobileContainer bgColor={'primary'} noPadding={true}>
            <HomeNavBar />
            <ScrollView>
              {children}
            </ScrollView>
          </MobileContainer>
        </body>
      </html>
    </ClerkProvider>
  )
}