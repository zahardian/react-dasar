import { Link } from "react-router-dom";

function AuthLayout(props) {
  const { children, title, type } = props;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-xl text-blue-600 font-bold mb-10">{title}</h1>
        {children}
        <p className="text-sm text-center mt-5">
          {type === "login" ? "Don't have an account?" : "Have an account?"}

          {type === "login" ? (
            <Link to="/register" className="font-bold text-indigo-600">
              Register
            </Link>
          ) : (
            <Link to="/login" className="font-bold text-indigo-600">
              Login
            </Link>
          )}

          {/* jika lebih dari 2 kondisi */}
          {/* {type === "login" && (
            <Link to="/register" className="font-bold text-indigo-600">
              Register
            </Link>
          )}

          {type === "register" && (
            <Link to="/login" className="font-bold text-indigo-600">
              Login
            </Link>
          )} */}
        </p>
      </div>
    </div>
  );
}

export default AuthLayout;
