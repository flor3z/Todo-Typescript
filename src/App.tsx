import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import TodoList from './components/TodoList';

type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
};

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputText(event.target.value);
  };

  const addTodo: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (inputText !== '') {
      const newTodo: TodoItem = {
        id: uuidv4(),
        text: inputText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }

    setInputText('');
  };
  return (
    <>
      <section>
        <form onSubmit={addTodo} className="flex justify-center">
          <input
            onChange={handleChange}
            value={inputText ? inputText : ''}
            className="border-slate-600 rounded-lg border-solid border-2"
          />
          <button className="bg-blue-400 text-white p-2 rounded-md hover:bg-blue-300 active:bg-blue-500 transition transform duration-100 ease-in-out">
            Submit
          </button>
        </form>
      </section>
      <section>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.text}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
