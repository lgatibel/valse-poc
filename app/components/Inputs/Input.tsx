'use client'
import React, { ChangeEvent, useId } from 'react'

interface IProps {
    type?: 'text' | 'email' | 'password' | 'date' | 'number'
    name: string
    placeholder?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ type = 'text', name, placeholder, onChange }: IProps) {
    const id = useId()

    return (
        <>
            <input onChange={(e) => onChange(e)} id={id} type={type} name={name} className="placeholder:text-white bg-white/[.1] rounded-full px-4 py-2.5" placeholder={placeholder} />
        </>
    )
}
