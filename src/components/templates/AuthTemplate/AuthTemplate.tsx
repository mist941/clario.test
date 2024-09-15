import { ReactNode } from 'react';
import styles from './AuthTemplate.module.scss';

type AuthTemplateProps = {
  children: ReactNode;
}
const AuthTemplate = ({ children }: AuthTemplateProps) => {
  return (
    <div className={styles.authTemplate}>
      {children}
    </div>
  );
};

export default AuthTemplate;