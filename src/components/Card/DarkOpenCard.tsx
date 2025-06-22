import React from "react"
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
export default function DarkOpenCard({
    children, 
    className,
    header,
    paragraph, 
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
        <Component className={`Card ${sizeClass[size]} ${className} ${style} Card-DarkOpenCard`}
         {...props}
         >
          <Image className="absolute left-0 top-0 rounded-2xl  " src={`/components/Vector 31.svg`} alt="wave" width={280} height={200} />
            <Image className="absolute right-0 rounded-2xl " src={`/components/Vector 32.svg`} alt="wave" height={280} width={250} />
           {children}
        </Component>
    )
}