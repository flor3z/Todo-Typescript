import ToDoItem from './TodoItem';

type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
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
  return (
    <ul className="flex-col items-center max-w-sm sm:max-w-xl mx-auto rounded-md bg-stone-100 shadow-lg divide-y divide-purple-300 animate-fade-right animate-ease-in-out">
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
  );
};

export default TodoList;
