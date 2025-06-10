
import React, { type ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className,
  ...rest
}) => {
const classNames = [
    styles.button,
    styles[variant],
    className,
  ].filter(Boolean).join(' ');
 return (
    <button
      className={classNames}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
