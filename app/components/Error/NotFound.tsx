import Link from 'next/link'
import Icon from '@/app/components/Icon'

export default function NotFound() {
    return (
        <div className="p-4 w-10/12 m-auto text-center rounded-full flex flex-col gap-8">
            <h2 className="text-xl">La page demandé n'éxite pas </h2>
            <Link href="/home" className="flex justify-center">
                <button className="flex rounded-lg bg-blue-600 py-4 px-8 gap-4">
                    <Icon icon="FiHome" />Acceuil
                </button>
            </Link>
        </div>
    )
}