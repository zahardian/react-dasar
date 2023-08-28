import Button from "../Elements/Button";
import IndexInput from "../Elements/Input";

function FormRegister() {
  return (
    <form action="">
      <IndexInput
        type="text"
        placeholder="insert your name..."
        label="Fullname"
        htmlFor="fullname"
      />
      <IndexInput
        type="email"
        placeholder="example@mail.com"
        label="Email"
        htmlFor="email"
      />
      <IndexInput
        type="password"
        placeholder="**********"
        label="Password"
        htmlFor="password"
      />
      <IndexInput
        type="password"
        placeholder="**********"
        label="Repeat Password"
        htmlFor="password"
      />
      <Button classname="bg-indigo-600">Register</Button>
    </form>
  );
}

export default FormRegister;
