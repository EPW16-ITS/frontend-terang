"use client";

import React, { useState } from "react";
import Typography from "../Typography";
import {
  AiOutlineCloseCircle,
  AiOutlineExclamationCircle,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { ErrorMessage, Field, useFormikContext } from "formik";
import type { InputTextProps } from "@/types/components/Input";

/**
 * Props for the InputText component.
 * @param {string} name
 * - The name of the input field for Formik integration. - Required
 * @param {"lg"|"base"|"sm"} [size='base']
 * - The size of the input field. Can be lg, base, or sm. Default is base. - Optional
 * @param {string} [label]
 * - The label of the input field. - Optional
 * @param {string} [placeholder]
 * - The placeholder of the input field. - Optional
 * @param {boolean} [required=false]
 * - Whether the input field is required that shows a star (*) in the label. Default is false. - Optional
 * @param {boolean} [disabled=false]
 * - Whether the input field is disabled. Default is false. - Optional
 * @param {boolean} [readonly=false]
 * - Whether the input field is readonly. Default is false. - Optional
 * @param {boolean} [showCount=false]
 * - Whether to show the character count that shows how many characters are left in the input field. Default is false. - Optional
 * @param {number} [maxLength]
 * - The maximum length of the input field that must followed by the showCount props. - Optional
 * @param {number} [tabIndex=0]
 * - The tabIndex of the input field. Default is 0. - Optional
 * @param {React.ReactNode} [prefix]
 * - The icon to be displayed before the text of the label in the input field. - Optional
 * @param {React.ReactNode} [suffix]
 * - The icon to be displayed after the text of the label in the input field. - Optional
 * @param {string} [helperText]
 * - The helper text of the input field. - Optional
 * @param {string} [className=""]
 * - The className of the component for adding custom styles from TailwindCSS. - Optional
 * @param {React.CSSProperties} [style={}]
 * - The style of the component for adding custom styles using inline CSS. - Optional
 * @returns {React.ReactElement} The InputText component with Formik integration and TailwindCSS styling
 */
export default function InputPassword({
  name,
  size = "base",
  label,
  placeholder,
  required = false,
  disabled = false,
  readonly = false,
  showCount = false,
  maxLength,
  tabIndex = 0,
  prefix,
  suffix,
  helperText,
  className = "",
  style = {},
  
}: InputTextProps): React.ReactElement {
  const { setFieldValue, errors, touched, values } = useFormikContext<{
    [key: string]: any;
  }>();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const errorsLogic = touched[name] && errors[name] && !disabled && !readonly;
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClear = () => {
    setFieldValue(name, "");
    inputRef?.current?.focus();
  };
  return (
    <div className={`mb-3 ${className ?? ""}`} style={style}>
      <div className="w-full flex justify-between items-center gap-3">
        {/* Label Input */}
        <label htmlFor={`inputfor-${name}`}>
          <Typography.Poppins as="span" level={9} className="input-label">
            {label}
            {required && label && <span className="text-accent-error-500"> *</span>}
          </Typography.Poppins>
        </label>

        {/* Count Label */}
        {showCount && maxLength && (
          <Typography.Poppins as="span" level={9} size="sm" className="input-count">
            {values[name] ? values[name].length : 0} / {maxLength}
          </Typography.Poppins>
        )}
      </div>

      {/* Input Group */}
      <div
        className={`input-text input-${size} ${disabled ? "disabled" : ""} ${errorsLogic ? "error" : ""}`}
      >
        {/* Input Prefix Icon */}
        {prefix && <div className="input-text-addons">{prefix}</div>}

        {/* Input Field */}
        <Field
          name={name}
          id={`inputfor-${name}`}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className={`text-${size}`}
          disabled={disabled || readonly}
          ref={inputRef}
          autoComplete="new-password"
          maxLength={maxLength}
          tabIndex={disabled ? -1 : tabIndex}
        />

        {/* Input Clear Icon */}
        {values && values[name] && !disabled && !readonly && (
          <div className="input-text-addons">
            <AiOutlineCloseCircle
              size={20}
              className="cursor-pointer"
              onClick={handleClear}
            />
          </div>
        )}

        {/* Input Show Password Icon */}
        <div
          className={`input-text-addons ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
          onClick={() => !disabled && setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible size={20} />
          ) : (
            <AiOutlineEye size={20} />
          )}
        </div>

        {/* Input Suffix Icon */}
        {suffix && <div className="input-text-addons">{suffix}</div>}
      </div>

      {errorsLogic ? (
        <>
          {/* Error Message */}
          <ErrorMessage name={name}>
            {(msg) => (
              <Typography.Poppins
                as="span"
                level={9}
                size="sm"
                className="input-error flex gap-1.5 items-center"
              >
                {msg}
              </Typography.Poppins>
            )}
          </ErrorMessage>
        </>
      ) : (
        <>
          {/* Helper Text */}
          <Typography.Poppins as="span" size="sm" level={9} className="input-helper">
            {helperText}
          </Typography.Poppins>
        </>
      )}
    </div>
  );
}
