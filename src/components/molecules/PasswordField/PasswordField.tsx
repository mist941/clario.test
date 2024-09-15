import { useState } from 'react';
import Input, { InputProps } from '../../atoms/Input/Input.tsx';
import styles from './PasswordField.module.scss';
import HidePasswordIcon from '../../icons/HidePasswordIcon.tsx';
import ShowPasswordIcon from '../../icons/ShowPasswordIcon.tsx';
import classNames from 'classnames';

type PasswordFieldProps = {
  className?: string;
} & InputProps;

const PasswordField = ({ className, ...rest }: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisible = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div className={classNames(styles.fieldWrap, className)}>
      <Input {...rest} type={showPassword ? 'text' : 'password'} className={styles.input} />
      {showPassword ? (
        <HidePasswordIcon
          onClick={togglePasswordVisible}
          className={styles.icon}
        />
      ) : (
        <ShowPasswordIcon
          onClick={togglePasswordVisible}
          className={styles.icon}
        />
      )}
    </div>
  );
};

export default PasswordField;