'use client'
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

interface IProps {
  to: string;
}

export default function LinkButton({ to, children }: PropsWithChildren<IProps>) {
  const router = useRouter()
  
  return (
    <button onClick={() => router.push(to)} className="bg-white sm:text-sm rounded-full text-black text-center px-6 py-2.5">
      {children}
    </button>
  )
}
