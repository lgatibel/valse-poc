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

export default function ProfilDetail({ profil }: IProps) {
    return (
        <div className="flex flex-col">
            <div className="h-2/3">
                <Image className="rounded-md" style={{ objectFit: 'cover', width: '100%' }} src={profil.photo} alt="image profil" />
            </div>
            <div className="rounded-t-lg bg-primary p-2">
                <div className="rounded-lg bg-gray-700 w-1/5 h-4">t</div>
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold">{profil.name}, {profil.age}</p>
                    </div>
                    <p className="text-md text-gray-500">A {profil.distance}</p>
                </div>
                <p>{profil.description}</p>
            </div>
        </div>
    )
}
