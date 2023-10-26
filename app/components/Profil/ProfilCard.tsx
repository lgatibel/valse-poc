import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface IProps {
    profil: {
        photo: StaticImageData,
        name: string,
        age: number,
        distance: string,
        description: string
    }
}

export default function ProfilCard({ profil }: IProps) {
    return (
        <div className="flex flex-col rounded-lg overflow-hidden shadow-profil-card shadow-shadow p-4 gap-4">
            <Image className="rounded-md" style={{objectFit:'cover', width: '100%'}} src={profil.photo} alt="image profil" />
            <p className="text-lg font-semibold">{profil.name}, {profil.age}</p>
            <p className="text-md text-gray-500">A {profil.distance}</p>
            <p>{profil.description}</p>
        </div>
    )
}
