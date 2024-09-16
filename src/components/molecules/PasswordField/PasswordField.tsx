import { useState } from 'react';
import Input, { InputProps } from '../../atoms/Input/Input.tsx';
import styles from './PasswordField.module.scss';
import HidePasswordIcon from '../../icons/HidePasswordIcon.tsx';
import ShowPasswordIcon from '../../icons/ShowPasswordIcon.tsx';
import classNames from 'classnames';
import TextMessage, { TextMessageStyleType } from '../../atoms/TextMessage/TextMessage.tsx';
import { getInputStyle } from '../../../utils/validation.ts';

type PasswordFieldErrors = {
  enoughCharacters: boolean;
  containsDigit: boolean;
  containsCasedLetters: boolean;
}

type PasswordFieldProps = {
  errors?: PasswordFieldErrors;
  className?: string;
  touched: boolean;
} & InputProps;

const PasswordField = ({ className, errors, touched, ...rest }: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);

  const togglePasswordVisible = () => {
    setShowPassword(prevState => !prevState);
  };

  const getTextMessageStyleByError = (error: keyof PasswordFieldErrors): TextMessageStyleType => {
    if (!errors) return '';
    if (!errors[error]) return 'success';
    return 'error';
  };

  const containsErrors = errors ? Object.values(errors || {}).some(i => i) : false;

  const iconClassNames = classNames(styles.icon, { [styles[getInputStyle(touched, containsErrors)]]: !focused });

  return (
    <div className={classNames(styles.fieldWrap, className)}>
      <Input
        {...rest}
        onFocus={e => {
          if (rest.onFocus) {
            rest.onFocus(e);
          }
          setFocused(true);
        }}
        onBlur={e => {
          if (rest.onBlur) {
            rest.onBlur(e);
          }
          setFocused(false);
        }}
        type={showPassword ? 'text' : 'password'}
        className={styles.input}
        style={getInputStyle(touched, containsErrors)}
      />
      {showPassword ? (
        <HidePasswordIcon
          onClick={togglePasswordVisible}
          className={iconClassNames}
        />
      ) : (
        <ShowPasswordIcon
          onClick={togglePasswordVisible}
          className={iconClassNames}
        />
      )}
      <div className={styles.passwordErrors}>
        <TextMessage style={getTextMessageStyleByError('enoughCharacters')}>
          From 8 to 64 characters (no spaces)
        </TextMessage>
        <TextMessage style={getTextMessageStyleByError('containsCasedLetters')}>
          Uppercase and lowercase letters
        </TextMessage>
        <TextMessage style={getTextMessageStyleByError('containsDigit')}>
          At least one digit
        </TextMessage>
      </div>
    </div>
  );
};

export default PasswordField;