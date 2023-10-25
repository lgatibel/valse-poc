import React from 'react'

interface IProps {
    title: string;
    upperCase?: Boolean;
    italic?: Boolean;
    align?: 'start' | 'center' | 'end';
}

export default function HeroTitle({ title, upperCase = false, italic = false, align = 'center'}: IProps) {
  return (
    <h1 className={`sm:text-xl text-3xl font-bold ${upperCase ? 'uppercase' : ''} ${italic ? 'italic' : ''} ${'text-' + align}`}>{title}</h1>
  )
}
