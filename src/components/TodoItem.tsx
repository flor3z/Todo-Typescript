import { useState } from 'react';
import EditTodoForm from './EditTodoForm';

type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
};

type TodoProps = {
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  todo: TodoItem;
  completedTodos: (id: string) => void;
  removeTodo: (id: string) => void;
};

const ToDoItem = ({
  todos,
  setTodos,
  todo,
  removeTodo,
  completedTodos,
}: TodoProps) => {
  const [edit, setEdit] = useState(false);
  const [editInput, setEditInput] = useState('');

  const handleEdit = (id: string) => {
    setEdit(!edit);
    const todoToEdit = todos.find((todo) => todo.id === id);

    if (todoToEdit) {
      setEditInput(todoToEdit.text);
    }
  };

  const handleUpdatedTodos = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: editInput } : todo
    );

    setTodos(updatedTodos);
    setEdit(false);
  };

  return (
    <div>
      {edit ? (
        <EditTodoForm
          todo={todo}
          setEdit={setEdit}
          edit={edit}
          editInput={editInput}
          setEditInput={setEditInput}
          handleUpdatedTodos={handleUpdatedTodos}
        />
      ) : (
        <div>
          <li className="flex justify-between mx-auto max-w-sm sm:max-w-lg py-4 animate-fade-right animate-duration-[400ms] animate-ease-in-out">
            <div className="flex items-center me-4">
              <input
                onClick={() => completedTodos(todo.id)}
                id="purple-checkbox"
                type="checkbox"
                defaultChecked={todo.completed}
                className="w-5 h-5 accent-purple-500 bg-gray-100 border-purple-300 rounded-md focus:ring-purple-500  focus:ring-1 "
              />
            </div>
            <div className="mr-auto p-3">
              <span className={`${todo.completed && 'line-through'}`}>
                {todo.text}
              </span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => handleEdit(todo.id)}
                className="text-xl hover:scale-90 transition transform duration-100 ease-out mx-3"
              >
                📝
              </button>
              <button
                className="font-bold text-xl text-purple-500 hover:text-purple-300 active:text-purple-500 active:scale-90 transition transform duration-100 ease-out"
                onClick={() => removeTodo(todo.id)}
              >
                X
              </button>
            </div>
          </li>
        </div>
      )}
    </div>
  );
};
export default ToDoItem;
