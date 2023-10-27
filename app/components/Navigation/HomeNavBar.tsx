'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Ico from '@/app/components/Ico'

export default function HomeNavBar() {
  const router = useRouter()

  const [showMenu, setShowMenu] = useState<boolean>(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="flex w-full justify-between">
      <button className="cursor-pointer" onClick={toggleMenu}>
        <Ico icon="FiMenu" size={32}/>
      </button>
      <span className="text-4xl bold">valse</span>
      <button className="cursor-pointer" onClick={() => router.back()}>
        <Ico icon="FiSend" size={24} />
      </button>
    </div>
  )
}
