import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

export type ButtonProps = {
  children?: ReactNode,
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={classNames(
        styles.button,
        { [styles.disabled]: rest.disabled },
      )}
    >
      {children}
    </button>
  );
};

export default Button;