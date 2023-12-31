'use client'
import Icon from '@/app/components/Icon'
import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
    showMenu: boolean;
    toggleMenu: () => void;
}

export default function Menu({ showMenu = false, toggleMenu }: IProps) {

    const [sidebarContentEl, setSidebarContentEl] = useState<HTMLElement | null>(null)

    useEffect(() => {
        setSidebarContentEl(document.getElementById('sidebar-content'))
    })

    const menuItems = [
        {
            label: "Mon Profil",
            href: "/my-profil"
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


    const handleclose = () => {
        toggleMenu()
    }

    return (
        <>
            {sidebarContentEl ?
                createPortal(
                    <div className={`${showMenu ? 'translate-x-0' : 'translate-x-[-100%]'} delay-150 duration-500 absolute top-0 bottom-0 left-0 w-full z-50 flex`}>
                        <div className="flex flex-col flex-grow w-3/4 bg-primary p-8 gap-16">
                            <button className="flex py-8 justify-end" onClick={handleclose}>
                                <Icon icon="FiX" />
                            </button>
                            <div className="text-4xl pt-12">Menu</div>
                            <div className="flex flex-col flex-grow justify-between">
                                <div className="flex flex-col gap-16">
                                {menuItems.map(({ label, href }, key) =>
                                    <Link href={href} key={key}>
                                        <div className="flex justify-between">
                                            {label}
                                            <Icon icon="FiChevronRight" />
                                        </div>
                                    </Link>
                                )}
                                </div>
                                <SignOutButton>
                                    <button>Sign out</button>
                                </SignOutButton>
                            </div>
                        </div>
                        <div className="w-1/4 bg-transparent" onClick={handleclose}>

                        </div>
                    </div>
                    , sidebarContentEl)
                : null}
        </>
    )
}
