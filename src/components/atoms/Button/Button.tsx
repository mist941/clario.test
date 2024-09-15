import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

type ButtonProps = {
  children?: ReactNode,
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={classNames(styles.button, rest.className)}
    >
      {children}
    </button>
  );
};

export default Button;