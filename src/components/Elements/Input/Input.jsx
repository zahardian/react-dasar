function Input(props) {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-md rounded w-full py-2 px-3 text-slate-600 border-slate-400 border focus:outline-none focus:border-slate-600"
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
}

export default Input;
