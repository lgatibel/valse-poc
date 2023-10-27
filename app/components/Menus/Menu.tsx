'use client'
import Ico from '@/app/components/Ico'
import Link from 'next/link'
import React from 'react'

interface IProps {
    showMenu: boolean;
    toggleMenu: () => void;
}

export default function Menu({ showMenu = false, toggleMenu }: IProps) {

    const menuItems = [
        {
            label: "Mon Profil",
            href: "/"
        },
        {
            label: "Mes préférences",
            href: "/"
        },
        {
            label: "Mon Compte",
            href: "/"
        }
    ]

    return (
        <div className={`${showMenu ? 'translate-x-0' : 'translate-x-3/4'} delay-1000 duration-1000 flex flex-col absolute top-0 bottom-0 left- w-9/12 bg-primary pl-8 p-2 gap-16`}>
            <button onClick={toggleMenu}>
                <Ico icon="FiX" />
            </button>
            <div className="text-4xl pt-32">MenuI</div>
            <div className="flex flex-col gap-16">
                {menuItems.map(({ label, href }) =>
                    <Link href={href}>
                        <div className="flex justify-between">
                            {label}
                            <Ico icon="FiChevronRight" />
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}
