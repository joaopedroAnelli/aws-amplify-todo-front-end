import '@aws-amplify/ui-react/styles.css';
import './App.css';
import { Heading } from '@aws-amplify/ui-react';
import Task from '../ui-components/Task';

function App() {
  return (
    <div className='App'>
      <Heading level={1}>Tarefas</Heading>

      <Task task={{ title: 'Teste 1', id: 'ladkfklajkldf' }} />
    </div>
  );
}

export default App;
