import React, { type InputHTMLAttributes } from 'react';
import inputStyles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { name: string; }

const Input: React.FC<InputProps> = ({ className, ...rest }) => (
    <input className={[inputStyles.input, className].filter(Boolean).join(' ')} {...rest} />
);

export default Input;