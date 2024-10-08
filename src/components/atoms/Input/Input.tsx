import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames';

export type InputStyleType = '' | 'error' | 'success';

export type InputProps = {
  style?: InputStyleType;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = ({ style = '', ...rest }: InputProps) => {
  return (
    <input
      {...rest}
      className={classNames(
        styles.input,
        styles[style],
        rest.className
      )}
    />
  );
};

export default Input;