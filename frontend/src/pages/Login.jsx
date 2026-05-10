import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    await login(email, password);

    navigate("/dashboard");

  };

  return (

    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-100
    ">

      <div className="
        bg-white
        p-8
        rounded-xl
        shadow-lg
        w-96
      ">

        <h1 className="
          text-3xl
          font-bold
          mb-6
          text-center
        ">
          Login
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
              w-full
              border
              p-3
              rounded-lg
              mb-4
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="
              w-full
              border
              p-3
              rounded-lg
              mb-6
            "
          />

          <button
            type="submit"
            className="
              w-full
              bg-blue-500
              text-white
              py-3
              rounded-lg
              hover:bg-blue-600
            "
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;