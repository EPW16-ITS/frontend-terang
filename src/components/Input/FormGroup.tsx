import { FormGroupProps } from "@/types/components/Input";
import { Form, Formik, FormikValues } from "formik";
import React from "react";

/**
 * Props for the FormGroup component.
 * @param {Object} props.initialValues
 * - The initial values of the form fields to be used in the form. - Required
 * @param {Function} props.onSubmit
 * - The function to be called when the form is submitted. - Required
 * @param {React.ReactNode} props.children
 * - The children of the form consists of form fields using Input component. - Required
 * @param {Object} props.validationSchema
 * - The validation schema of the form fields using Yup for form validation. - Optional
 * @returns {React.ReactElement} The FormGroup component with Formik integration.
 */
export default function FormGroup<T extends FormikValues>({
  children,
  className = "",
  style = {},
  ...props
}: FormGroupProps<T>): React.ReactElement {
  return (
    <div className={className} style={style}>
      <Formik {...props} >
        <Form>{children}</Form>
      </Formik>
    </div>
  );
}
