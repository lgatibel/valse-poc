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
            href: "/home"
        },
        {
            label: "Mes préférences",
            href: "/home"
        },
        {
            label: "Mon Compte",
            href: "/home"
        }
    ]

    return (
        <div className={`${showMenu ? 'translate-x-0' : 'translate-x-[-100%]'} delay-150 duration-500 flex flex-col absolute top-0 bottom-0  left-0 w-3/4 bg-primary pl-8 p-2 gap-16`}>
            <button  className="flex p-8 justify-end" onClick={toggleMenu}>
                <Ico icon="FiX" />
            </button>
            <div className="text-4xl pt-12">Menu</div>
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
