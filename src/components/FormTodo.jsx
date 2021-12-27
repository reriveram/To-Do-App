import { useState } from "react";

const FormTodo = (props) => {
  const { handleAddItem } = props;
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description,
    });

    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button disabled={description ? "" : "disabled"}>Add</button>
    </form>
  );
};

export default FormTodo;
