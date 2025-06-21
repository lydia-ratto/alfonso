import React, { type FormHTMLAttributes } from 'react';
import formStyles from './Form.module.css';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ children, className, ...rest }) => {
    return (
        <form className={[formStyles.form, className].filter(Boolean).join(' ')} {...rest}>
            {children}
        </form>
    );
};

export default Form;