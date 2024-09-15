import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from './Button.module.scss';

export type ButtonProps = {
  children?: ReactNode,
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;