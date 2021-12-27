const Todo = (props) => {
  const {
    onChange,
    data: { id, description, done },
  } = props;

  return (
    <div>
      <input
        type="checkbox"
        name={id}
        defaultChecked={done}
        onChange={onChange}
      />
      <span>{description}</span>
    </div>
  );
};
export default Todo;
