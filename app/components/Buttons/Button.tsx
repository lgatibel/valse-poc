import { PropsWithChildren } from "react";

interface IProps {
  label: string
}

export default function Button({ label }: IProps) {
  
  return (
    <button className="bg-white sm:text-sm rounded-full text-black text-center px-6 py-2.5">
      {label}
    </button>
  )
}
