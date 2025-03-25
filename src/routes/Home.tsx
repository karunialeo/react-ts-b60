import { NavLink } from "react-router-dom";
import MyCounter from "../components/MyCounter";
import MyForm from "../components/MyForm";
import UserData from "../components/UserData";

function Home() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <NavLink to="/login">Ke Halaman Login</NavLink>
      <NavLink to="/register">Ke Halaman Register</NavLink>
      <UserData />
      {/* <MyCounter /> */}
      <MyForm />
    </main>
  );
}

export default Home;
