'use client'
import { useRouter } from 'next/navigation'
import Icon from '@/app/components/Icon'

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
          <Icon icon="FiArrowLeft" size={32} />
          : <Icon icon="FiX" size={32} />
        }
      </button>
    </div>
  )
}
