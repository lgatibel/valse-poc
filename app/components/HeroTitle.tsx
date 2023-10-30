import React from 'react'

interface IProps {
    title: string;
    upperCase?: Boolean;
    italic?: Boolean;
    align?: 'start' | 'center' | 'end';
    className?: string;
}

export default function HeroTitle({ title, upperCase = false, italic = false, align = 'center', className}: IProps) {
  return (
    <h1 className={`sm:text-xl text-3xl font-bold ${upperCase ? 'uppercase' : ''} ${italic ? 'italic' : ''} ${'text-' + align} ${className}`}>{title}</h1>
  )
}
