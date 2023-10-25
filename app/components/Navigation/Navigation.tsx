'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import backIcon from '@/assets/arrow-left-white.svg'
import closeIcon from '@/assets/x-white.svg'

interface IProps {
  action?: 'back' | 'close'
}

export default function Navigation({ action = 'back' }: IProps) {
  const router = useRouter()

  return (
    <div className="flex w-full justify-between">
      <button className="text-5xl cursor-pointer" onClick={() => router.back()}>
        {action === 'back' ?
          <Image src={backIcon} alt="back button" width={32} height={32} />
          : <Image src={closeIcon} alt="close button" width={32} height={32} />
        }
      </button>
    </div>
  )
}
