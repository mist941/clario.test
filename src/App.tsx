import TextMessage from './components/atoms/TextMessage/TextMessage.tsx';
import Button from './components/atoms/Button/Button.tsx';

const App = () => {
  return (
    <div>
      <TextMessage>Test</TextMessage>
      <TextMessage type='error'>Test</TextMessage>
      <TextMessage type='success'>Test</TextMessage>
      <Button>
        Click
      </Button>
    </div>
  );
};

export default App;