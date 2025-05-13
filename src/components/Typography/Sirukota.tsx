import React from "react";
import type {SirukotaProps} from "@/types/components/Typography";

/**
 * Props for the Heading component.
 * @param {React.ReactNode} children
 * - The content of the component for the Heading component. - Required
 * @param {1|2|3|4|5|6|7|8|9} [level='1']
 * - The level of the Display component. Can be 1, 2, 3, 4, 5, or 6. Default is 1. - Optional
 * @param {keyof JSX.IntrinsicElements} [as='h1']
 * - The HTML tag to use for the component. Can be h1, h2, h3, h4, h5, or h6. Default is h1. - Optional
 * @param {string} [className='']
 * - The className of the component for adding custom styles from TailwindCSS. - Optional
 * @returns {React.ReactElement} The Heading component with the appropriate HTML tag, styling, and content.
 */
export default function Sirukota({
  children,
  level = 1,
  as = "h1",
  className = "",
 
  ...props
}: SirukotaProps): React.ReactElement {
  const textSizeLevel = {
    1: "text-10xl",
    2: "text-9xl",
    3: "text-8xl",
    4: "text-7xl",
    5: "text-6xl",
    6: "text-5xl",
    7: "text-4xl",
    8: "text-3xl",
    9: "text-2xl"
  };
  const textSizeClass = textSizeLevel[level];
  const Component = as 
  return (
    <Component
      {...props}
      className={`typography-sirukota ${textSizeClass} ${className}`}
    >
      {children}
    </Component>
  );
}
