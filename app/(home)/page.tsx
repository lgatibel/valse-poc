import React from 'react'
import ProfilCard from '@/app/components/Profil/ProfilCard'
import { getProfils } from '@/app/queries/profilQueries'
import AppLayout from '@/app/components/Layouts/AppLayout'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const profils = await getProfils()

  return (
    <AppLayout>
      <div className="relative w-full flex flex-col gap-12 p-8 pt-24">
          {profils ? profils.map((profil, index) => { return <ProfilCard key={index} profil={profil} /> }) : null}
      </div>
    </AppLayout>
  )
}
