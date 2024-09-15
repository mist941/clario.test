import Button from '../atoms/Button/Button.tsx';
import { FormEvent } from 'react';
import useForm from '../../hooks/useForm.ts';
import InputField from '../molecules/InputField/InputField.tsx';
import styles from './SignUpForm.module.scss';

const SignUpForm = () => {
  const form = useForm();

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submit} className={styles.signUpForm}>
      <InputField className={styles.field}/>
      <InputField className={styles.field}/>
      <Button className={styles.submitButton}>
        Sign up
      </Button>
    </form>
  );
};

export default SignUpForm;