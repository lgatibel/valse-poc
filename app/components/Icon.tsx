import { createElement } from 'react'
import * as Ico from 'react-icons/fi'
type IconModule = typeof import('react-icons/fi/index')
import colors from 'tailwindcss/colors'


interface IProps {
    icon: Exclude<keyof IconModule, number>,
    size?: number,
    color?: string,
}

export default function Icon({ icon, size = 24, color = 'white' }: IProps) {
    const test = colors.cyan[100]

    return createElement(
        Ico[icon],
        { className: [`text-${color}`], size }
    )
}