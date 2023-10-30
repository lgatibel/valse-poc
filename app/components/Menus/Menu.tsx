'use client'
import Ico from '@/app/components/Icon'
import Link from 'next/link'

interface IProps {
    showMenu: boolean;
    toggleMenu: () => void;
}

export default function Menu({ showMenu = false, toggleMenu }: IProps) {

    const menuItems = [
        {
            label: "Mon Profil",
            href: "/my-profil"
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


    const handleclose = () => {
        toggleMenu()
    }

    return (
        <div className={`${showMenu ? 'translate-x-0' : 'translate-x-[-100%]'} delay-150 duration-500 flex absolute top-0 bottom-0 left-0 w-full`}>
            <div className="flex flex-col w-3/4 bg-primary pl-8 p-2 gap-16">
                <button className="flex p-8 justify-end" onClick={handleclose}>
                    <Ico icon="FiX" />
                </button>
                <div className="text-4xl pt-12">Menu</div>
                <div className="flex flex-col gap-16">
                    {menuItems.map(({ label, href }, key) =>
                        <Link href={href} key={key}>
                            <div className="flex justify-between">
                                {label}
                                <Ico icon="FiChevronRight" />
                            </div>
                        </Link>
                    )}
                </div>
            </div>
            <div className="w-1/4 bg-transparent" onClick={handleclose}>

            </div>
        </div>
    )
}
