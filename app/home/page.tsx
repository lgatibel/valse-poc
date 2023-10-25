import React from 'react'
import HomeNavBar from '@/components/Navigation/HomeNavBar'
import firstProfileImage from '@/assets/profile-home-1.png'
import secondProfileImage from '@/assets/profile-home-2.png'
import thirdProfileImage from '@/assets/profile-home-3.png'
import ProfilCard from '@/app/components/ProfilCard'

export default function Home() {

  const profiles = [
    {
      photo: firstProfileImage,
      name: "Jean-michel",
      age: 27,
      distance: "5km",
      description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Duis portitor tincidun nullable"
    },
    {
      photo: secondProfileImage,
      name: "jean-michel",
      age: 22,
      distance: "10km",
      description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Duis portitor tincidun nullable"
    },
    {
      photo: thirdProfileImage,
      name: "jean-michel",
      age: 35,
      distance: "1km",
      description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Duis portitor tincidun nullable"
    },
  ]

  return (
    <div className="w-full flex flex-col flex-grow gap-12 p-4">
      <HomeNavBar />
      {profiles.map((profile) => <ProfilCard profile={profile}/>)}
    </div>
  )
}
