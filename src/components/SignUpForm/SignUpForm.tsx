import Button from '../atoms/Button/Button.tsx';
import useForm from '../../hooks/useForm.ts';
import InputField from '../molecules/InputField/InputField.tsx';
import styles from './SignUpForm.module.scss';
import PasswordField from '../molecules/PasswordField/PasswordField.tsx';
import { isContainsCasedLetters, isContainsDigit, isEnoughCharacters, isValidEmail } from '../../utils/validation.ts';

const SignUpForm = () => {
  const { values, touched, errors, onSubmit, changeValue, changeTouched } = useForm({
    validate: (values) => {
      const errors = {
        email: '',
        password: {
          enoughCharacters: true,
          containsDigit: true,
          containsCasedLetters: true,
        },
      };
      if (!isValidEmail(values.email)) {
        errors.email = 'Email is not valid';
      }
      if (!isEnoughCharacters(values.password)) {
        errors.password.enoughCharacters = false;
      }
      if (!isContainsDigit(values.password)) {
        errors.password.containsDigit = false;
      }
      if (!isContainsCasedLetters(values.password)) {
        errors.password.containsCasedLetters = false;
      }
      return errors;
    },
    submit: (values) => {
      console.log(values);
    },
  });

  const emailValidationMessage = touched.email ? errors.email as string : '';

  return (
    <form onSubmit={onSubmit} className={styles.signUpForm}>
      <InputField
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
        className={styles.field}
        value={values.password}
        onChange={e => changeValue('password', e.target.value)}
        onBlur={() => {
          changeTouched('password', true);
        }}
        onFocus={() => {
          changeTouched('password', false);
        }}
      />
      <Button className={styles.submitButton}>
        Sign up
      </Button>
    </form>
  );
};

export default SignUpForm;