'use client'
import { useRouter } from 'next/navigation'

export default function HomeNavBar() {
  const router = useRouter()

  return (
    <div className="flex w-full justify-between">
      <button className="cursor-pointer" onClick={() => router.back()}>
        <svg  width="80"
  height="80" className='w-8 h-8 icon-white'>
          <use href="./chat.svg" style={{
            fill: 'red',
            color: 'green'
          }}></use>
        </svg>
        {/* <img src="/assets/chat.svg" alt="placeholder" width={25} height={25} className="icon-white" /> */}
      </button>
      <span className="text-3xl ">valse</span>
      <button className="cursor-pointer" onClick={() => router.back()}>{`<-`}</button>
    </div>
  )
}
