function Label(props) {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="font-bold text-md text-slate-600">
      {children}
    </label>
  );
}

export default Label;
