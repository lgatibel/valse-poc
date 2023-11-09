import React, { PropsWithChildren } from 'react'

interface IProps {
  label: string
}

export default function FormButton({ label }: IProps) {
  return (
    <button type="submit" className="capitalize bg-white rounded-full text-black text-center px-6 py-2.5">
      {label}
    </button>
  )
}
