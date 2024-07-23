type TodoItem = {
  id: string;
  text: string;
  completed: boolean;
};

type TodoEditProps = {
  todo: TodoItem;
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  editInput: string;
  setEditInput: React.Dispatch<React.SetStateAction<string>>;
  handleUpdatedTodos: (id: string) => void;
};

const EditTodoForm = ({
  todo,
  setEdit,
  edit,
  editInput,
  setEditInput,
  handleUpdatedTodos,
}: TodoEditProps) => {
  return (
    <div className="flex text-center justify-center bg-opacity-75 py-4 animate-fade-right animate-duration-[400ms] animate-ease-in-out">
      <div className="flex space-between items-center">
        <label className="text-lg font-bold pr-2">Edit Todo</label>
        <form
          className="flex space-between"
          onSubmit={(e) => (handleUpdatedTodos(todo.id), e.preventDefault())}
        >
          <input
            value={editInput}
            className="py-2 w-60"
            onChange={(e) => setEditInput(e.target.value)}
          />
          <div>
            <button className="px-2 text-white bg-purple-400 mx-1 rounded-sm">
              Save
            </button>
            <button
              className="px-2 text-white bg-purple-400 rounded-sm"
              type="button"
              onClick={() => setEdit(!edit)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTodoForm;
