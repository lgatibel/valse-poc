import React from 'react'
import HomeNavBar from '@/components/Navigation/HomeNavBar'
import ProfilCard from '@/app/components/Profil/ProfilCard'
import { getProfils } from '@/app/queries/profilQueries'
import Menu from '@/app/components/Menus/Menu'

export default async function Home() {
  let profils = await getProfils()

  return (
    <div className="w-full flex flex-col flex-grow gap-12 p-4">
      <HomeNavBar />
      <Menu/>
      {profils ? profils.map((profil) => { return <ProfilCard profil={profil} /> }) : null}
    </div>
  )
}
