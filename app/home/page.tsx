import React from 'react'
import HomeNavBar from '@/components/Navigation/HomeNavBar'
import ProfilCard from '@/app/components/Profil/ProfilCard'
import { getProfils } from '@/app/queries/profilQueries'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const profils = await getProfils()

  return (
    <div className="w-full flex flex-col flex-grow gap-12 px-4 h-screen">
      <HomeNavBar />
      {profils ? profils.map((profil, index) => { return <ProfilCard key={index} profil={profil} /> }) : null}
    </div>
  )
}
