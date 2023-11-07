import React from 'react'
import ProfilCard from '@/app/components/Profil/ProfilCard'
import { getProfils } from '@/app/queries/profilQueries'
import AppLayout from '@/app/components/Layouts/AppLayout'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const profils = await getProfils()

  return (
    <AppLayout>
      <div className="relative w-full flex flex-col flex-grow gap-12 h-screen p-4">
        <div className="w-full flex flex-col gap-12 px-4 h-screen">
          {profils ? profils.map((profil, index) => { return <ProfilCard key={index} profil={profil} /> }) : null}
        </div>
      </div>
    </AppLayout>
  )
}
