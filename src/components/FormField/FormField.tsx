import React from 'react';
import formFieldStyles from './FormField.module.css';

interface FormFieldProps {
  children: React.ReactNode;
  label?: string;
  htmlFor: string;
  error?: string;
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({ children, label, htmlFor, error, className }) => {
  return (
    <div className={[formFieldStyles.fieldWrapper, className].filter(Boolean).join(' ')}>
      <label htmlFor={htmlFor} className={formFieldStyles.label}>
        {label}
      </label>
      {children}
      <div className={formFieldStyles.errorText} aria-live="polite">
        {error}
      </div>
    </div>
  );
};

export default FormField;