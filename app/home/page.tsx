import React, { useState } from 'react'
import HomeNavBar from '@/components/Navigation/HomeNavBar'
import ProfilCard from '@/app/components/Profil/ProfilCard'
import { getProfils } from '@/app/queries/profilQueries'

export default async function Home() {
  let profils = await getProfils()

  return (
    <div className="w-full flex flex-col flex-grow gap-12 p-4">
      <HomeNavBar />
      {profils ? profils.map((profil, index) => { return <ProfilCard key={index} profil={profil} /> }) : null}
    </div>
  )
}
