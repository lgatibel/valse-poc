'use client'
import { useRouter } from 'next/navigation'
import Icon from '@/app/components/Icon'

interface IProps {
  action?: 'back' | 'close';
  className?: string;
  backUrl?: string
}

export default function Navigation({ action = 'back', className = '', backUrl }: IProps) {
  const router = useRouter()

  const handleBackButton = () => {
    if (backUrl) {
      console.log(backUrl)
      router.replace(backUrl)
    } else {
      console.log("NO BACK URL")
      router.back();
    }
  }

  return (
    <div className={`flex w-full justify-between ${className}`}>
      <button className="text-5xl cursor-pointer" onClick={handleBackButton}>
        {action === 'back' ?
          <Icon icon="FiArrowLeft" size={32} />
          : <Icon icon="FiX" size={32} />
        }
      </button>
    </div>
  )
}
