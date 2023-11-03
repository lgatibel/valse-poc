import Icon from '@/app/components/Icon'
import Navigation from '@/app/components/Navigation/Navigation'
import React from 'react'

export default function Chats() {
    const matchs = [
        {
            name: 'chris'
        },
        {
            name: 'reese'
        },
        {
            name: 'jeffrey'
        },
        {
            name: 'laura'
        },
        {
            name: 'mathilde'
        },
        {
            name: 'luc'
        },
    ];

    const chats = [
        {
            name: 'marie',
            message: 'Hello, ca va',
            date: '04:04AM',
            unread: 3
        },
        {
            name: 'christine',
            message: 'Hey tu sais danser ?',
            date: '08:58AM',
            unread: 1
        },
        {
            name: 'maurice',
            message: 'Jai un petit cadeau pour toi ? kdldk',
            date: '11:33AM',
            unread: 0
        },
    ]

    return (
        <div className="w-full overflow-hidden flex flex-col gap-6">
            <Navigation />
            <div className="flex items-center bg-gray-700 rounded-lg p-2.5 m-4">
                <Icon icon="FiSearch" />
                <input className="bg-gray-700 pl-2" type="text" placeholder="Rechercher" />
            </div>
            <div className="flex flex-col gap-4 border-b border-gray-900 pb-4 px-4">
                <h2 className="capitalize text-2xl">Nouveau matchs</h2>
                <div className="flex gap-3 overflow-x-auto no-scrollbar">
                    {matchs.map((match, index) => {
                        return (
                            <div key={`${index}-match`} className="flex flex-col w-full">
                                <div className="relative rounded-full w-20 h-20 bg-gray-500">
                                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                                </div>
                                <p className="text-center capitalize">{match.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="flex flex-col gap-4 px-4 pt-4">
                <p className="text-xl">Messages</p>
                {chats.map((chat, index) => {
                    return (
                        <div key={`${index}-chat`} className="flex justify-between items-start gap-4 border-b border-gray-900 pb-2.5">
                            <div className="rounded-full w-20 h-20 relative bg-gray-500">
                                {chat.unread > 0 &&
                                    <div className="absolute flex items-center justify-center rounded-full w-6 h-6 bottom-0 right-0 border border-white bg-pink-300">
                                        {chat.unread}
                                    </div>}
                            </div>
                            <div className="flex flex-col gap-2 grow pt-2 w-1/5">
                                <div className="text-xl capitalize">{chat.name}</div>
                                <p className="whitespace-nowrap text-ellipsis overflow-hidden">{chat.message}</p>
                            </div>
                            <div className="text-gray-500 pt-2">
                                {chat.date}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
