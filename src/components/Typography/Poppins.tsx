import React from "react";
import type { PoppinsProps } from "@/types/components/Typography";

/**
 * Props for the Display component.
 * @param {React.ReactNode} children
 * - The content of the component for the Display component. - Required
 * @param {lg|base|sm} [size='base']
 * - The level of the Display component. Can be lg, base, or sm. Default is base. - Optional
 * @param {keyof JSX.IntrinsicElements} [as='h1']
 * - The HTML tag to use for the component. Can be h1, h2, h3, h4, h5, or h6. Default is h1. - Optional
 * @param {string} [className='']
 * - The className of the component for adding custom styles from TailwindCSS. - Optional
* @param {1|2|3|4|5|6|7|8|9|10} [level = '1']
 * @returns {React.ReactElement} The Display component with the appropriate HTML tag, styling, and content.
 */
export default function Poppins({
  children,
  size = "base",
  as = "h1",
  level =1,
  className = "",
  ...props
}: PoppinsProps): React.ReactElement {
  const textWeightLevel = {
    lg: "font-bold",
    base: "font-semibold",
    sm: "font-normal",
  };
  const textWeightClass = textWeightLevel[size];
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
    10: "text-xs",
  };
  const textSizeClass = textSizeLevel[level];
  const Component = as;
  return (
    <Component
      {...props}
      className={`typography-poppins ${textWeightClass} ${className} ${textSizeClass}`}
    >
      {children}
    </Component>
  );
}
