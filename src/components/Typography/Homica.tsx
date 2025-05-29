import React from "react";
import type { HomicaProps } from "@/types/components/Typography";

/**
 * Props for the Paragraph component.
 * @param {React.ReactNode} children
 * - The content of the component for the Paragraph component. - Required
 * @param {base|sm} [size='base']
 * - The level of the Paragraph component. Can be base or sm. Default is base. - Optional
 * @param {1|2|3|4|5|6|7|8|9} [level = '1']
 * 
 * @param {keyof JSX.IntrinsicElements} [as='p']
 * - The HTML tag to use for the component. Can be p, span, or small. Default is p. - Optional
 * @param {string} [className='']
 * - The className of the component for adding custom styles from TailwindCSS. - Optional
 * @returns {React.ReactElement} The Paragraph component with the appropriate HTML tag, styling, and content.
 */
export default function Homica({
  children,
  level = 1,
  as = "h1",
  className = "",
 
  ...props
}: HomicaProps): React.ReactElement {
  const textSizeLevel = {
    1: "text-10xl",
    2: "text-9xl",
    3: "text-8xl",
    4: "text-7xl",
    5: "text-6xl",
    6: "text-5xl",
    7: "text-4xl",
    8: "text-3xl",
    9: "text-2xl",
    10: "text-xl",
    11: "text-lg",
    12: "text-base",
    13: "text-sm",
    14: "text-xs"
  };
  const textSizeClass = textSizeLevel[level];
  const Component = as 
 
  return (
    <Component
      {...props}
      className={`typography-homica ${textSizeClass} ${className} `}
    >
      {children}
    </Component>
  );
}
