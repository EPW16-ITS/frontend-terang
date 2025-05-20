// src/components/Button/Tertiary.tsx
import React from "react";
import type { ButtonProps } from "@/types/components/Button";

/**
 * Props for the Button Tertiary component.
 */
export default function Tertiary({
  children,
  size = "base",
  type = "text",
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
    text: "button-tertiary", // class dari CSS kamu
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
      className={`button ${iconOnly ? "button-icon" : ""} ${typeClass[type]} justify-${placement} button-${size} ${className} ${fullWidth ? "w-full" : ""} ${roundedClass}`}
      disabled={disabled}
      type={buttonType}
      {...props}
    >
      {!iconOnly && prefix && <span className={`text-${size}`}>{prefix}</span>}
      <span className={`text-${size}`}>{children}</span>
      {!iconOnly && suffix && <span className={`text-${size}`}>{suffix}</span>}
    </Component>
  );
}
