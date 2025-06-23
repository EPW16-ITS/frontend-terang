import React, { Children } from "react"
import { CardProps } from "@/types/components/Card"
import Image from "next/image"
import Typography from "../Typography"

/**
 * Props for the Button Primary component.
 * @param {React.ReactNode} children
 * - The content of the component for the Button component. - Required
 * @param {string} [className='']
 * - The className of the component for adding custom styles from TailwindCSS. - Optional
 * @param {React.CSSProperties} [style={}]
 * - The style of the component for adding custom styles using inline CSS. - Optional
 *  @param {lg|base|sm} [size='base']
 * - The size of the Button component. Can be lg, base or sm. Default is base. - Optional
 *  @param {React.ElementType} [as="div"]
 * @returns {React.ReactElement} The Button component with the appropriate HTML tag, styling, and content.
 */
export default function LightOpenCard({
    header,
    paragraph,
    className,
    style,
    size = "base",
    as: Component = 'div',
    children,
    ...props
}: CardProps): React.ReactElement {
    const sizeClass = {
        sm: 'Card-scale-75',
        base: 'Card-scale-100',
        lg: 'Card-scale-125'
    }
    return (
        <Component className={`Card ${sizeClass[size]} ${className} ${style} Card-LightOpenCard`}
            {...props}
        >
            <Image className="absolute left-0 top-0 " src={`./components/wave 3.svg`} alt="wave" width={280} height={200} />
            <Image className="absolute right-0 " src={`./components/wave 2.svg`} alt="wave" height={60} width={58} />
            {children}

        </Component>
    )
}