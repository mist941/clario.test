import Input, { InputProps } from '../../atoms/Input/Input.tsx';
import TextMessage from '../../atoms/TextMessage/TextMessage.tsx';
import styles from './InputField.module.scss';
import { getInputStyle } from '../../../utils/validation.ts';

type InputFieldProps = {
  error?: string;
  className?: string;
  touched: boolean;
} & InputProps;

const InputField = ({ error, className,touched, ...rest }: InputFieldProps) => {
  return (
    <div className={className}>
      <Input
        {...rest}
        className={styles.input}
        style={getInputStyle(touched, !!error)}
      />
      {error && (
        <TextMessage
          style='error'
          className={styles.error}
        >
          {error}
        </TextMessage>
      )}
    </div>
  );
};

export default InputField;