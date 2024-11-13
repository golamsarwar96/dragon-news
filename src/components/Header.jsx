import moment from "moment";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-5">
      <div className="logo">
        <img className="w-96" src={logo} alt="Logo" />
      </div>
      <h2 className="text-zinc-400">Journalism Without Fear or Favour</h2>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
