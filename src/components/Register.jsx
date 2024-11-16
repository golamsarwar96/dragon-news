import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createNewUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const handleSubmit = (e) => {
    //Preventing reload
    e.preventDefault();

    //Fetching form data (new way)
    const form = new FormData(e.target);
    console.log(form);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "Must be more 5 characters long" });
      return;
    }
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    //using context to get the function (line-6)
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        //Reset the full form after registration
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
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>

            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
            />
            {error.name && <label className="text-xs mt-2">{error.name}</label>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo"
              name="photo"
              className="input input-bordered"
            />
          </div>

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
            <button className="btn btn-primary">Register</button>
          </div>
          <p className="text-md text-center mt-3">
            Already have an account?
            <Link to="/auth/login" className="text-red-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
