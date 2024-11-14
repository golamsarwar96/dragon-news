import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-2 ">Login With</h2>
      <div className="space-y-3">
        <button className="btn w-full">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="btn w-full">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
