'use client'
import { useRouter } from 'next/navigation'
import Ico from '@/app/components/Ico'

interface IProps {
  action?: 'back' | 'close'
}

export default function Navigation({ action = 'back' }: IProps) {
  const router = useRouter()

  return (
    <div className="flex w-full justify-between">
      <button className="text-5xl cursor-pointer" onClick={() => router.back()}>
        {action === 'back' ?
          <Ico icon="FiArrowLeft" size={32} />
          : <Ico icon="FiX" size={32} />
        }
      </button>
    </div>
  )
}
