import { NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between p-2 mt-2 items-center">
      <div className="ml-32"></div>
      <div className="nav space-x-3">
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/carrer"> Career </NavLink>
        <NavLink to="about"> About </NavLink>
      </div>
      <div className="login flex gap-1 items-center">
        <div>
          <img src={userIcon} alt="" />
        </div>
        <div>
          <button className="btn btn-neutral rounded-none">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
