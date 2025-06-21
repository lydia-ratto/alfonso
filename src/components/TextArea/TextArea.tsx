import React, { type TextareaHTMLAttributes } from 'react';
import inputStyles from '../Input/Input.module.css';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { name: string; }
const TextArea: React.FC<TextAreaProps> = ({ className, ...rest }) => (
    <textarea className={[inputStyles.input, className].filter(Boolean).join(' ')} rows={5} {...rest} />
);

export default TextArea;