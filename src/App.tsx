import '@aws-amplify/ui-react/styles.css';
import './App.css';
import TaskCreateForm from '../ui-components/TaskCreateForm';

function App() {
  return (
    <div className='App'>
      <TaskCreateForm
        onSubmit={(fields) => {
          console.log(fields);

          return {
            title: 'Topppp',
          };
        }}
      />
    </div>
  );
}

export default App;
