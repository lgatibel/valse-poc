import { createElement } from 'react'
import * as Ico from 'react-icons/fi'
type IconModule = typeof import('react-icons/fi/index')
import colors from 'tailwindcss/colors'


interface Icons {
    icon: Exclude<keyof IconModule, number>,
    size?: number,
    color?: string,
}

export default function Icons({ icon, size = 24, color = 'white' }: Icons) {
    const test = colors.cyan[100]

    return createElement(
        Ico[icon],
        { className: [`text-${color}`], size }
    )
}