import AuthTemplate from '../../templates/AuthTemplate/AuthTemplate.tsx';
import SignUpForm from '../../SignUpForm/SignUpForm.tsx';
import styles from './SignUpPage.module.scss';

const SignUpPage = () => {
  return (
    <AuthTemplate>
      <div className={styles.signUpPage}>
        <h1 className={styles.title}>Sign up</h1>
        <SignUpForm />
      </div>
    </AuthTemplate>
  );
};

export default SignUpPage;