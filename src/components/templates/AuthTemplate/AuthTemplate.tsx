import { ReactNode } from 'react';
import styles from './AuthTemplate.module.scss';

type AuthTemplateProps = {
  children: ReactNode;
}
const AuthTemplate = ({ children }: AuthTemplateProps) => {
  return (
    <main className={styles.authTemplate}>
      {children}
    </main>
  );
};

export default AuthTemplate;