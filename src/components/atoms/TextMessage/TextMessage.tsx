import styles from './TextMessage.module.scss';
import classNames from 'classnames';

type TextMessageStyleType = '' | 'error' | 'success';

type TextMessageProps = {
  style?: TextMessageStyleType;
  children: string;
}

const TextMessage = ({ style = '', children }: TextMessageProps) => {
  return (
    <p className={classNames(styles.message, styles[style])}>
      {children}
    </p>
  );
};

export default TextMessage;