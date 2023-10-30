'use client'
import { useRouter } from 'next/navigation'
import Ico from '@/app/components/Icon'

interface IProps {
  action?: 'back' | 'close';
  className?: string;
}

export default function Navigation({ action = 'back', className }: IProps) {
  const router = useRouter()

  return (
    <div className={`flex w-full justify-between ${className}`}>
      <button className="text-5xl cursor-pointer" onClick={() => router.back()}>
        {action === 'back' ?
          <Ico icon="FiArrowLeft" size={32} />
          : <Ico icon="FiX" size={32} />
        }
      </button>
    </div>
  )
}
