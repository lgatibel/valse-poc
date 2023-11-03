import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IProps {
    profil: {
        id: number,
        photo?: any,
        name: string,
        age: number,
        distance: string,
        description: string
    }
}

export default function ProfilCard({ profil }: IProps) {
    return (
        <Link href={`/profil/${profil.id}`}>
            <div className="flex flex-col rounded-lg overflow-hidden shadow-profil-card shadow-shadow p-4 gap-4">
                <div>
                    <Image className="rounded-md" width={318} height={477} style={{ objectFit: 'cover', width: '100%' }} src={profil.photo} alt="image profil" />
                </div>
                <p className="text-lg font-semibold">{profil.name}, {profil.age}</p>
                <p className="text-md text-gray-500">A {profil.distance}</p>
                <p>{profil.description}</p>
            </div>
        </Link>
    )
}
