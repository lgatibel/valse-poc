import Ico from '@/app/components/Ico'
import React from 'react'

export default function Menu() {

    const menuItems = [
        {
            label: "Mon Profil",
            link: "/"
        },
        {
            label: "Mes préférences",
            link: "/"
        },
        {
            label: "Mon Compte",
            link: "/"
        }
    ]

    return (
        <div className="flex flex-col absolute top-0 bottom-0 left-0 w-9/12 bg-primary pl-8 p-2 gap-16">
            <div className="text-4xl pt-32">Menu</div>
            <div className="flex flex-col gap-16">
                {menuItems.map((item) =>
                    <div className="flex justify-between">
                        {item.label}
                        <Ico icon="FiChevronRight" />
                    </div>
                )}
            </div>
        </div>
    )
}
