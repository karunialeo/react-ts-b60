import React, { useContext, useState } from "react";
// import "../assets/styles/form-style.css";
import { AuthContext } from "../../contexts/auth";

interface LoginFormState {
  username: string;
  email: string;
  phone: string;
}

function LoginForm() {
  const { user, setUser } = useContext(AuthContext);

  const [formState, setFormState] = useState<LoginFormState>({
    username: "username not found",
    email: "",
    phone: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name, event.target.value);
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log(`Halo berikut data saya :`, formState); // object yang berisi data form : username, email, phone
    setUser(formState);
  };

  return (
    <form className="w-96" onSubmit={handleSubmit}>
      <h1 className="text-2xl mb-5">Login</h1>
      <input
        className="w-full border-2 p-1 mb-5 rounded-sm border-gray-500 text-lg"
        type="text"
        name="username"
        id="username"
        onChange={handleChange}
        placeholder="masukkan username..."
      />
      <input
        className="w-full border-2 p-1 mb-5 rounded-sm border-gray-500 text-lg"
        type="text"
        name="email"
        id="email"
        onChange={handleChange}
        placeholder="masukkan email..."
      />
      <input
        className="w-full border-2 p-1 mb-5 rounded-sm border-gray-500 text-lg"
        type="tel"
        name="phone"
        id="phone"
        onChange={handleChange}
        placeholder="masukkan nomor ponsel..."
      />
      <button
        className="text-white bg-green-600 px-10 py-2 rounded-sm"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
