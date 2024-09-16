import styles from './TextMessage.module.scss';
import classNames from 'classnames';

export type TextMessageStyleType = '' | 'error' | 'success';

type TextMessageProps = {
  style?: TextMessageStyleType;
  children: string;
  className?: string;
}

const TextMessage = ({ style = '', className, children }: TextMessageProps) => {
  return (
    <p className={classNames(styles.message, styles[style], className)}>
      {children}
    </p>
  );
};

export default TextMessage;