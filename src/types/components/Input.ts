import { FormikConfig, FormikValues } from "formik";
import React, { InputHTMLAttributes } from "react";

export interface FormGroupProps<T extends FormikValues>
  extends Omit<FormikConfig<T>, "children"> {
  /**
   * The children of the form consists of form fields using Input component.
   */
  children: React.ReactNode;
  /**
   * The className of the component for adding custom styles from TailwindCSS. - Optional
   */
  className?: string;
  /**
   * The style of the component for adding custom styles using inline CSS. - Optional
   */
  style?: React.CSSProperties;
}

export interface InputTextProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix" | "suffix"> {
  /**
   * The name of the input field for Formik integration. - Required
   */
  name: string;
  children?: React.ReactNode
  /**
   * The size of the input field. Can be lg, base, or sm. Default is base. - Optional
   */
  size?: "lg" | "base" | "sm";
  /**
   * The type of the input field. Can be text or email. Default is text. - Optional
   */
  type?: "text" | "email" | "date" | "select" |"";
  /**
   * The label of the input field. - Optional
   */
  label?: string;
  /**
   * The placeholder of the input field. - Optional
   */
  placeholder?: string;
  /**
   * Whether the input field is required that shows a star (*) in the label. Default is false. - Optional
   */
  required?: boolean;
  /**
   * Whether the input field is disabled. Default is false. - Optional
   */
  disabled?: boolean;
  /**
   * Whether the input field is readonly. Default is false. - Optional
   */
  readonly?: boolean;
  /**
   * Whether to show the character count that shows how many characters are left in the input field. Default is false. - Optional
   */
  showCount?: boolean;
  /**
   * The maximum length of the input field that must followed by the showCount props. - Optional
   */
  maxLength?: number;
  /**
   * The tabIndex of the input field. Default is 0. - Optional
   */
  tabIndex?: number;
  /**
   * The icon to be displayed before the text of the label in the input field. - Optional
   */
  prefix?: React.ReactNode;
  /**
   * The icon to be displayed after the text of the label in the input field. - Optional
   */
  suffix?: React.ReactNode;
  /**
   * The helper text of the input field. - Optional
   */
  helperText?: React.ReactNode;
  /**
   * The className of the component for adding custom styles from TailwindCSS. - Optional
   */
  className?: string;
  /**
   * The style of the component for adding custom styles using inline CSS. - Optional
   */
  style?: React.CSSProperties;
  as?: React.ElementType
  optional? : string;
  iconOnly?: boolean;
};