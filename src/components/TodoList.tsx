import ToDoItem from './TodoItem';

type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
  timeStamp: string;
};

type TodoListProps = {
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  completedTodos: (id: string) => void;
  removeTodo: (id: string) => void;
};

const TodoList = ({
  todos,
  setTodos,
  removeTodo,
  completedTodos,
}: TodoListProps) => {
  return todos.length > 0 ? (
    <ul className="flex-col ring-4  ring-purple-400 items-center max-w-sm sm:max-w-xl mx-auto rounded-md bg-stone-100 shadow-dm divide-y divide-purple-300 animate-fade-right animate-ease-in-out">
      {todos.map((todo) => (
        <ToDoItem
          todos={todos}
          key={todo.id}
          todo={todo}
          setTodos={setTodos}
          removeTodo={removeTodo}
          completedTodos={completedTodos}
        />
      ))}
    </ul>
  ) : null;
};

export default TodoList;
