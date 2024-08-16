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
    <div className="flex text-center justify-center bg-opacity-75 py-4 animate-fade-left animate-duration-[400ms] animate-ease-in-out">
      <div className="flex justify-between">
        <div className="flex flex-col text-left">
          <label className="text-lg font-bold pr-2">Edit</label>
          <label className="text-lg font-bold pr-2">Todo</label>
        </div>
        <form
          className="flex space-between"
          onSubmit={(e) => (handleUpdatedTodos(todo.id), e.preventDefault())}
        >
          <input
            maxLength={25}
            value={editInput}
            className="py-2 w-60 shadow-md rounded-sm pl-1"
            onChange={(e) => setEditInput(e.target.value)}
          />
          <div className="flex flex-col justify-between ml-1">
            <button className="px-2 text-white bg-purple-400 rounded-sm mb-1">
              Save
            </button>
            <button
              className="px-2 text-white bg-purple-400 rounded-sm "
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
