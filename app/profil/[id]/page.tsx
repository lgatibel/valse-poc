import NotFound from '@/app/components/Error/NotFound'
import Navigation from '@/app/components/Navigation/Navigation'
import { getProfil } from '@/app/queries/profilQueries'
import Image from 'next/image'
import React from 'react'


interface IProps {
    params: {
        id: number
    }
}

export default async function ProfilDetail({ params }: IProps) {

    let profil = await getProfil(params.id)

    return (
        <div className="flex flex-col w-full h-screen">
            {profil !== null ?
                <>
                    <div className="absolute z-10 px-4 py-8">
                        <Navigation />
                    </div>
                    <Image fill style={{ objectFit: 'cover', width: '100%' }} src={profil.photo} alt="image profil" />
                    <div className="absolute bottom-0 h-[30%] left-0 rounded-t-lg bg-primary p-4 flex flex-col gap-8">
                        <div className="flex justify-center">
                            <div className="rounded-lg bg-gray-700 w-12 h-1.5"></div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-between">
                                <p className="text-lg font-semibold">{profil.name}, {profil.age}</p>
                            </div>
                            <p className="text-md text-gray-500">A {profil.distance}</p>
                        </div>
                        <p>{profil.description}</p>
                    </div>
                </>
                : <NotFound />}

        </div>
    )
}
