import Input, { InputProps } from '../../atoms/Input/Input.tsx';
import TextMessage from '../../atoms/TextMessage/TextMessage.tsx';
import styles from './InputField.module.scss';

type InputFieldProps = {
  error?: string;
  className?: string;
} & InputProps;

const InputField = ({ error, className, ...rest }: InputFieldProps) => {
  return (
    <div className={className}>
      <Input
        {...rest}
        className={styles.input}
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