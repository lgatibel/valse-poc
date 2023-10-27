import React, { createElement } from 'react'
import * as IconsList from 'react-icons/fi'
type IconModule = typeof import('react-icons/fi/index')
import colors from 'tailwindcss/colors'


interface Icons {
    icon: Exclude<keyof IconModule, number>,
    size?: number,
    color?: string,
}

export default function Ico({ icon, size = 24, color = 'white' }: Icons) {
    const test = colors.cyan[100]

    return createElement(
        IconsList[icon],
        { className: [`text-${color}`], size }
    )
}