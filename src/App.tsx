import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/TodoList';
import ThemeButton from './components/ThemeButton';
import { useThemeContext } from './context/ThemeContext';

type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
  timeStamp: string;
};

function App() {
  const getLocalTodos = () => {
    const localTodos = localStorage.getItem('todos');
    return localTodos ? JSON.parse(localTodos) : [];
  };

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState<TodoItem[]>(getLocalTodos());

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const getTimeStamp = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    let d = new Date();
    let day = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `Added: ${month} ${day}, ${year}`;
  };

  const addTodo: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (inputText.trim() !== '') {
      const newTodo: TodoItem = {
        id: uuidv4(),
        text: inputText,
        completed: false,
        timeStamp: getTimeStamp(),
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
        <div className="bg-zinc-400 dark:bg-[#4d4183] min-h-screen">
          <h1 className="flex justify-center font-semibold text-5xl pt-10 text-gray-200">
            To Do List
          </h1>
          <section className="py-10 relative ">
            <ThemeButton />
            <h2 className="absolute top-4 left-5 font-semibold text-gray-200 text-lg sm:text-xl dark:text-gray-200">
              {todos.length === 0
                ? null
                : todos.length === 1
                ? `You have ${todos.length} task left!`
                : `You have ${todos.length} task's left`}
            </h2>
            <form onSubmit={addTodo} className="flex justify-center">
              <input
                maxLength={30}
                placeholder="Enter todo..."
                onChange={(e) => setInputText(e.target.value)}
                value={inputText ? inputText : ''}
                className="border-slate-200 rounded-l-lg border-solid border-2 focus:outline-none focus:border-purple-300 pl-1 sm:pl-4 w-56 sm:w-80"
              />
              <button className="bg-[#13b874] text-white p-2 rounded-r-lg tracking-wider font-medium hover:bg-[#3ca87b]  transition transform duration-100 ease-in-out">
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
      </div>
    </>
  );
}

export default App;
