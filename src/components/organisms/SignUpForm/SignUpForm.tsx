import Button from '../../atoms/Button/Button.tsx';
import useForm from '../../../hooks/useForm.ts';
import InputField from '../../molecules/InputField/InputField.tsx';
import styles from './SignUpForm.module.scss';
import PasswordField from '../../molecules/PasswordField/PasswordField.tsx';
import {
  isContainsCasedLetters,
  isContainsDigit,
  isEnoughCharacters,
  isValidEmail,
} from '../../../utils/validation.ts';

const SignUpForm = () => {
  const { values, touched, errors, onSubmit, changeValue, changeTouched } = useForm({
    validate: (values) => {
      const errors: Record<string, boolean | string> = {};
      if (!isValidEmail(values.email)) {
        errors.email = 'Email is not valid';
      }
      if (!values.email) {
        errors.email = 'Email is empty';
      }
      if (!isEnoughCharacters(values.password)) {
        errors.passwordEnoughCharacters = true;
      }
      if (!isContainsCasedLetters(values.password)) {
        errors.passwordContainsCasedLetters = true;
      }
      if (!isContainsDigit(values.password)) {
        errors.passwordContainsDigit = true;
      }
      return errors;
    },
    submit: (values) => {
      console.log(values);
    },
  });

  const emailValidationMessage = touched.email ? errors.email as string : '';
  const passwordValidationMessages = touched.password ? {
    enoughCharacters: errors.passwordEnoughCharacters as boolean,
    containsDigit: errors.passwordContainsDigit as boolean,
    containsCasedLetters: errors.passwordContainsCasedLetters as boolean,
  } : undefined;

  return (
    <form onSubmit={onSubmit} className={styles.signUpForm}>
      <InputField
        placeholder='Enter an email'
        className={styles.field}
        value={values.email}
        onChange={e => changeValue('email', e.target.value)}
        onBlur={() => {
          changeTouched('email', true);
        }}
        onFocus={() => {
          changeTouched('email', false);
        }}
        style={emailValidationMessage ? 'error' : ''}
        error={emailValidationMessage}
      />
      <PasswordField
        placeholder='Enter a password'
        className={styles.field}
        value={values.password}
        onChange={e => {
          changeValue('password', e.target.value);
          changeTouched('password', true);
        }}
        errors={passwordValidationMessages}
      />
      <Button className={styles.submitButton}>
        Sign up
      </Button>
    </form>
  );
};

export default SignUpForm;