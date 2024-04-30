import ToDoItem from './TodoItem';

type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
};

type TodoListProps = {
  todos: TodoItem[];
  completedTodos: (id: string) => void;
  removeTodo: (id: string) => void;
};

const TodoList = ({ todos, removeTodo, completedTodos }: TodoListProps) => {
  return (
    <ul className="flex-col items-center  max-w-md sm:max-w-3xl mx-auto rounded-sm bg-stone-100 shadow-lg divide-y divide-purple-300 animate-fade-right animate-ease-in-out">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          completedTodos={completedTodos}
        />
      ))}
    </ul>
  );
};

export default TodoList;
