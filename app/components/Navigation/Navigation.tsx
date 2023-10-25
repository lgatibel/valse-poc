'use client'
import { useRouter } from 'next/navigation'

export default function Navigation() {
    const router = useRouter()

  return (
    <div className="flex w-full justify-between">
        <button className="text-3xl cursor-pointer" onClick={() => router.back()}>{`<-`}</button>
    </div>
  )
}
