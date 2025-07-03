import React, { type ButtonHTMLAttributes } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    to?: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  to,
  className,
  ...rest
}) => {
const classNames = [
    styles.button,
    styles[variant],
    className,
  ].filter(Boolean).join(' ');

  if (to) {
    return (
      <Link
        to={to}
        className={classNames}
        {...(rest as Omit<LinkProps, 'to'>)}
      >
        {children}
      </Link>
    );
  }
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
