import Button from "../Elements/Button";
import IndexInput from "../Elements/Input";

function FormLogin() {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/product";
  };
  return (
    <form onSubmit={handleLogin}>
      <IndexInput
        type="email"
        placeholder="example@mail.com"
        label="Email"
        htmlFor="email"
        name="email"
      />
      <IndexInput
        type="password"
        placeholder="**********"
        label="Password"
        htmlFor="password"
        name="password"
      />
      <Button classname="bg-green-600" type="submit">
        Login
      </Button>
    </form>
  );
}

export default FormLogin;
