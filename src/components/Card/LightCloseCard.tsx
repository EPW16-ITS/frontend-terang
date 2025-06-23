
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
export default function LightCloseCard({
    children,
    header,
    paragraph,
    className, 
    style, 
    size = "base",
     as: Component = 'div', 
     ...props
}: CardProps): React.ReactElement {
    const sizeClass = {
        sm: 'Card-scale-75',
        base: 'Card-scale-100',
        lg: 'Card-scale-125'
    }
    return (
        <Component className={`Card ${sizeClass[size]} ${className} ${style} Card-LightCloseCard`}
         {...props}
         >
            <Image className="absolute rounded-2xl" src={`./components/background.svg`} alt="background" width={240} height={240}/>
          
            {children}
        </Component>
    )
}