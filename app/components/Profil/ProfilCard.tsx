import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import imgPlaceholder from '@/assets/profils/profile-home-1.png'

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
            <div className="flex flex-col rounded-lg overflow-hidden shadow-profil-card shadow-shadow p-4 gap-4 relative">
                <div>
                    {profil.photo ?
                        <Image className="rounded-md" width={318} height={477} style={{ objectFit: 'cover', width: '100%' }} src={profil.photo[0].path} alt="image profil" />
                        : <Image className="rounded-md" width={318} height={477} style={{ objectFit: 'cover', width: '100%' }} src={imgPlaceholder} alt="image profil" />
                    }
                </div>
                <p className="text-lg font-semibold">{profil.name}, {profil.age}</p>
                <p className="text-md text-gray-500">A {profil.distance}</p>
                <p>{profil.description}</p>
            </div>
        </Link>
    )
}
