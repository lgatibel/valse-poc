import Link from 'next/link'
import BackImage from '@/assets/home-white.svg'
import Image from 'next/image'

export default function NotFound() {
    return (
        <div className="p-4 w-10/12 m-auto text-center rounded-full flex flex-col gap-8">
            <h2 className="text-xl">La page demandé n'éxite pas </h2>
            <Link href="/home" className="flex justify-center">
                <button className="flex rounded-lg bg-blue-600 py-4 px-8 gap-4">
                    <Image src={BackImage} width={24} height={24} alt="home button" />Acceuil
                </button>
            </Link>
        </div>
    )
}