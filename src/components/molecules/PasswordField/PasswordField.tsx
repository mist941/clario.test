import InputField from '../InputField/InputField.tsx';
import { useState } from 'react';
import { InputProps } from '../../atoms/Input/Input.tsx';
import styles from './PasswordField.module.scss';
import { ReactComponent as ShowPasswordIcon } from '../../../assets/icons/show-password.svg';
import { ReactComponent as HidePasswordIcon } from '../../../assets/icons/hide-password.svg';

type PasswordFieldProps = {
  className?: string;
} & InputProps;

const PasswordField = ({ className, ...rest }: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisible = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div className={className}>
      <InputField {...rest} type='password' className={styles.input} />
      {showPassword ? (
        <HidePasswordIcon onClick={togglePasswordVisible} />
      ) : (
        <ShowPasswordIcon onClick={togglePasswordVisible} />
      )}
    </div>
  );
};

export default PasswordField;