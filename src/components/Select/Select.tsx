import React, { type SelectHTMLAttributes } from 'react';
import inputStyles from '../Input/Input.module.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  options: { value: string | number; label: string }[];
}
const Select: React.FC<SelectProps> = ({ options, className, ...rest }) => (
    <select className={[inputStyles.input, className].filter(Boolean).join(' ')} {...rest}>
      {options.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
    </select>
);

export default Select;