import React from "react";
import type { SuperComicProps } from "@/types/components/Typography";

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
export default function SuperComic({
  children,
  level = 1,
  as = "h1",
  className = "",
 
  ...props
}: SuperComicProps): React.ReactElement {
  const textSizeLevel = {
    1: "text-6xl",
    2: "text-5xl",
    3: "text-4xl",
    4: "text-3xl",
    5: "text-2xl",
    6: "text-xl",
    7: "text-lg",
    8: "text-base",
    9: "text-sm",
    10: "text-xs"
  };
  const textSizeClass = textSizeLevel[level];
  const Component = as 
 
  return (
    <Component
      {...props}
      className={`typography-super-comic ${textSizeClass} ${className} `}
    >
      {children}
    </Component>
  );
}
