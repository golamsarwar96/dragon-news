import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signInUser, setUser } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        user = result.user;
        console.log(user);
        e.target.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className=" bg-base-100 w-full flex justify-center items-center max-w-sm shadow-2xl">
        <form onSubmit={handleSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-md text-center mt-3">
            New to our platform?{" "}
            <Link to="/auth/register" className="text-red-600">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
