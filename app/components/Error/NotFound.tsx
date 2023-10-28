import Link from 'next/link'
import Ico from '@/app/components/Ico'

export default function NotFound() {
    return (
        <div className="p-4 w-10/12 m-auto text-center rounded-full flex flex-col gap-8">
            <h2 className="text-xl">La page demandé n'éxite pas </h2>
            <Link href="/home" className="flex justify-center">
                <button className="flex rounded-lg bg-blue-600 py-4 px-8 gap-4">
                    <Ico icon="FiHome" />Acceuil
                </button>
            </Link>
        </div>
    )
}