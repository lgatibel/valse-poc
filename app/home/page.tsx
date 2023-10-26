import React from 'react'
import HomeNavBar from '@/components/Navigation/HomeNavBar'
import firstProfileImage from '@/assets/profile-home-1.png'
import secondProfileImage from '@/assets/profile-home-2.png'
import thirdProfileImage from '@/assets/profile-home-3.png'
import ProfilCard from '@/app/components/Profil/ProfilCard'
import { z } from 'zod'
import { rejects } from 'assert'

const profilSchema = z.object({
  id: z.number(),
  photo: z.string(),
  name: z.string(),
  age: z.number(),
  distance: z.string(),
  description: z.string()
})

const profilsSchema = z.array(profilSchema)

type Profil = z.infer<typeof profilSchema>

type Profils = z.infer<typeof profilsSchema>



const getProfils = async (): Promise<Profils |  null> => {
  const data = await fetch("http://localhost:4000/profils")
    .then((res) => res.json())

  try {
    const parsedData = profilsSchema.parse(data)
    return parsedData;
  }
  catch (e) {
    return null
  }
}



export default async function Home() {
  let profils = await getProfils()


  return (
    <div className="w-full flex flex-col flex-grow gap-12 p-4">
      <HomeNavBar />
      {profils ? profils.map((profil: Profil) => { return <ProfilCard profil={profil} /> }) : null}
    </div>
  )
}
