import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface IProps {
    profile: {
        photo: StaticImageData,
        name: string,
        age: number,
        distance: string,
        description: string
    }
}

export default function ProfilCard({ profile }: IProps) {
    return (
        <div className="flex flex-col rounded-lg overflow-hidden shadow-profil-card shadow-shadow p-4 gap-4">
            <Image className="rounded-md" style={{objectFit:'cover', width: '100%'}} src={profile.photo} alt="image profile" />
            <p className="text-lg font-semibold">{profile.name}, {profile.age}</p>
            <p className="text-md text-gray-500">A {profile.distance}</p>
            <p>{profile.description}</p>
        </div>
    )
}
