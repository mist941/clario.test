import styles from './TextMessage.module.scss';
import classNames from 'classnames';

type TextMessageType = '' | 'error' | 'success';

export type TextMessageProps = {
  type?: TextMessageType;
  children: string;
}

const TextMessage = ({ type = '', children }: TextMessageProps) => {
  return (
    <p className={classNames(styles.message, styles[type])}>
      {children}
    </p>
  );
};

export default TextMessage;