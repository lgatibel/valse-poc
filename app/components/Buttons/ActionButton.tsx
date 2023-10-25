import React, { PropsWithChildren } from 'react'

export default function ActionButton({ children }: PropsWithChildren) {
  return (
    <button className="capitalize bg-white rounded-full text-black text-center px-6 py-2.5">
      {children}
    </button>
  )
}
