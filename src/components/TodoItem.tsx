type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
};

type TodoProps = {
  todo: TodoItem;
  completedTodos: (id: string) => void;
  removeTodo: (id: string) => void;
};

const ToDoItem = ({ todo, removeTodo, completedTodos }: TodoProps) => {
  return (
    <div>
      <li className="flex justify-between mx-auto max-w-sm sm:max-w-lg py-4 animate-fade-right animate-duration-[400ms] animate-ease-in-out">
        <div className="flex items-center me-4">
          <input
            onClick={() => completedTodos(todo.id)}
            id="purple-checkbox"
            type="checkbox"
            className="w-5 h-5 accent-purple-500 bg-gray-100 border-purple-300 rounded-md focus:ring-purple-500  focus:ring-1 "
          />
        </div>
        <div className="mr-auto p-3">
          <span className={`${todo.completed && 'line-through'}`}>
            {todo.text}
          </span>
        </div>
        <button
          className="font-bold text-xl text-purple-500 hover:text-purple-300 active:text-purple-500 active:scale-90 transition transform duration-100 ease-out"
          onClick={() => removeTodo(todo.id)}
        >
          X
        </button>
      </li>
    </div>
  );
};
export default ToDoItem;
