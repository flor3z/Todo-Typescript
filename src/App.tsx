import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/TodoList';
import ThemeButton from './components/ThemeButton';
import { useThemeContext } from './context/ThemeContext';

type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
};

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (inputText.trim() !== '') {
      const newTodo: TodoItem = {
        id: uuidv4(),
        text: inputText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }

    setInputText('');
  };

  const removeTodo = (id: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const completedTodos = (id: string) => {
    const checkedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    return setTodos(checkedTodos);
  };

  const { darkMode } = useThemeContext();

  return (
    <>
      <div className={darkMode ? 'dark' : ''}>
        <section className="py-10 relative h-full">
          <ThemeButton />
          <h1 className="absolute top-4 left-5 font-semibold text-gray-600 text-xl dark:text-gray-200">
            {todos.length === 0
              ? null
              : todos.length === 1
              ? `You have ${todos.length} task left!`
              : `You have ${todos.length} task's left`}
          </h1>
          <form onSubmit={addTodo} className="flex justify-center">
            <input
              maxLength={30}
              placeholder="Enter todo..."
              onChange={(e) => setInputText(e.target.value)}
              value={inputText ? inputText : ''}
              className="border-slate-200 rounded-l-lg border-solid border-2 focus:outline-none focus:border-purple-300 pl-4 w-80"
            />
            <button className="bg-purple-400 text-white p-2 rounded-r-lg tracking-wider font-medium hover:bg-purple-300 active:bg-purple-500 transition transform duration-100 ease-in-out">
              Submit
            </button>
          </form>
        </section>
        <section>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            completedTodos={completedTodos}
            removeTodo={removeTodo}
          />
        </section>
      </div>
    </>
  );
}

export default App;
