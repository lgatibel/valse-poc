'use client'
import { useRouter } from 'next/navigation'
import Icon from '@/app/components/Icon'
import Menu from '@/app/components/Menus/Menu';
import { useState } from 'react';
import Link from 'next/link';

export default function HomeNavBar() {
  const router = useRouter()


  const [showMenu, setShowMenu] = useState<boolean>(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }


  return (
    <div className="flex w-full justify-between">
      <Menu showMenu={showMenu} toggleMenu={toggleMenu} />
      <button className="cursor-pointer" onClick={toggleMenu}>
        <Icon icon="FiMenu" size={32} />
      </button>
      <span className="text-4xl bold">valse</span>
      <Link href="/chats" className="cursor-pointer" onClick={() => router.back()}>
        <Icon icon="FiSend" size={24} />
      </Link>
    </div>
  )
}
