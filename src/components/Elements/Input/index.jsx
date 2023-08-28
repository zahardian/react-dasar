import Input from "./Input";
import Label from "./Label";

function IndexInput(props) {
  const { label, type, placeholder, htmlFor, name } = props;
  return (
    <div className="mb-5">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input type={type} placeholder={placeholder} name={name}></Input>
    </div>
  );
}

export default IndexInput;
