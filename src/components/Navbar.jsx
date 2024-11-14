import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="flex justify-between p-2 mt-2 items-center">
      <div className="ml-32">{user && user.email}</div>
      <div className="nav space-x-3">
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/carrer"> Career </NavLink>
        <NavLink to="about"> About </NavLink>
      </div>
      <div className="login flex gap-1 items-center">
        <div>
          <img src={userIcon} alt="" />
        </div>
        {user && user?.email ? (
          <button onClick={logOut} className="btn btn-neutral rounded-none">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
