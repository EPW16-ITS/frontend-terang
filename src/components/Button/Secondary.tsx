import React from "react";
import type { ButtonProps } from "@/types/components/Button";

/**
 * Props for the Button Secondary component.
 * @param {React.ReactNode} children
 * - The content of the component for the Button component. - Required
 * @param {base|sm} [size='base']
 * - The size of the Button component. Can be lg, base, or sm. Default is base. - Optional
 * @param {"default"|"outline"|"text"} [type='default']
 * - The type of the Button component. Can be default, outline, or text. Default is default. - Optional
 * @param {"submit"|"reset"|"button"} [buttonType='button']
 * - The HTML type of the button. Can be submit, reset, or button. Default is button. - Optional
 * @param {number} [tabIndex=0]
 * - The tabIndex of the button. Default is 0. - Optional
 * @param {boolean} [iconOnly=false]
 * - Whether the Button component should only contain an icon. Default is false. - Optional
 * @param {boolean} [disabled=false]
 * - Whether the Button component should be disabled. Default is false. - Optional
 * @param {boolean} [fullWidth=false]
 * - Whether the Button component should be full width. Default is false. - Optional
 * @param {keyof JSX.IntrinsicElements} [as='button']
 * - The HTML tag to use for the component. Can be button, a, or span. Default is button. - Optional
 * @param {React.ReactNode} [prefix]
 * - The icon to be displayed before the text of the label in the button component. - Optional
 * @param {React.ReactNode} [suffix]
 * - The icon to be displayed after the text of the label in the button component. - Optional
 * @param {"center"|"between"} [placement='center']
 * - The placement of the icon and text in the button component. Can be center or between. Default is center. - Optional
 * @param {string} [className='']
 * - The className of the component for adding custom styles from TailwindCSS. - Optional
 * @param {React.CSSProperties} [style={}]
 * - The style of the component for adding custom styles using inline CSS. - Optional
 * @param {React.MouseEventHandler<HTMLButtonElement>} [onClick]
 * - The function to be called when the button is clicked. - Optional
 * @param {React.MouseEventHandler<HTMLButtonElement>} [onMouseOut]
 * - The function to be called when the mouse leaves the button. - Optional
 * @param {React.MouseEventHandler<HTMLButtonElement>} [onMouseOver]
 *  @param {"full"|"lg"|"md"|"sm"} [Rounded='full']
 * - The function to be called when the mouse hovers over the button. - Optional
 * @param {"full"|"lg"|"md"|"sm"} [Rounded='full']
 * - The rounded style of the button component. Can be full, lg, md, or sm. Default is full. - Optional
 * @returns {React.ReactElement} The Button component with the appropriate HTML tag, styling, and content.
 */
export default function Secondary({
  children,
  size = "base",
  type = "default",
  iconOnly = false,
  disabled = false,
  fullWidth = false,
  as = "button",
  prefix,
  suffix,
  placement = "center",
  className = "",
  Rounded = "full",
  buttonType = "button",
  ...props
}: ButtonProps): React.ReactElement {
  const Component = as;
  const typeClass = {
    default: "",
    outline: "button-outline",
    text: "button-text",
  };

  const typeRounded = {
    full: "rounded-full",
    lg: "rounded-3xl",
    md: "rounded-2xl",
    sm: "rounded-xl",
  };

  const roundedClass = typeRounded[Rounded];

  return (
    <Component
      className={`button ${iconOnly ? "button-icon" : ""} ${typeClass[type]} justify-${placement} button-${size} button-secondary ${className} ${fullWidth ? "w-full" : ""} ${roundedClass}`}
      disabled={disabled} type={buttonType}
      {...props}
    >
      {!iconOnly && prefix && <span className={`text-${size}`}>{prefix}</span>}
      <span className={`text-${size}`}>{children}</span>
      {!iconOnly && suffix && <span className={`text-${size}`}>{suffix}</span>}
    </Component>
  );
}
