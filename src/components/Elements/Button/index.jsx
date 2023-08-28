function Button(props) {
  const { classname, children, onClick = () => {}, type = "button" } = props;
  return (
    <div>
      <button
        className={`h-10 w-full px-6 font-semibold rounded-md ${classname} text-white`}
        type={type}
        onClick={() => onClick()}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
