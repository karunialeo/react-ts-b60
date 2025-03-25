import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import EditDialog from "./dialog/EditDialog";

function UserData() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <section>
      <h2 className="text-2xl">Logged in User</h2>
      <p>Username : {user.username}</p>
      <p>Phone : {user.phone}</p>
      <p>Email : {user.email}</p>

      <EditDialog />
    </section>
  );
}

export default UserData;
