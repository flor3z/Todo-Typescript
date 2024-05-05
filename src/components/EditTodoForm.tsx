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
    <div className="flex text-center justify-center bg-opacity-75 ">
      <div className="flex justify-evenly items-center">
        <label className="text-lg font-bold">Edit Todo</label>
        <form
          onSubmit={(e) => (handleUpdatedTodos(todo.id), e.preventDefault())}
        >
          <input
            value={editInput}
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
