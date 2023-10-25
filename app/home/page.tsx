import React from 'react'
import HomeNavBar from '@/components/Navigation/HomeNavBar'
import firstProfileImage from '@/assets/profile-home-1.png'
import secondProfileImage from '@/assets/profile-home-2.png'
import thirdProfileImage from '@/assets/profile-home-3.png'

export default function Home() {

  const profiles = [
    {
      img: firstProfileImage,
      firstName: "jean-michel",
      age: "27",
      description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Duis portitor tincidun nullable"
    },
    {
      img: secondProfileImage,
      firstName: "jean-michel",
      age: "27",
      description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Duis portitor tincidun nullable"
    },
    {
      img: thirdProfileImage,
      firstName: "jean-michel",
      age: "27",
      description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Duis portitor tincidun nullable"
    },
  ]

  return (
    <div className="w-full flex flex-col flex-grow gap-24 ">
      <HomeNavBar/>
        Home Page
    </div>
  )
}
