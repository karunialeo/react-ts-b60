// interface untuk masing-masing objek/user
interface User {
  id: number;
  name: string;
}

// interface untuk array user list
interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  return (
    <ul>
      {users.map((user) => (
        <li>
          <button onClick={() => alert(user.name)}>{user.name}</button>
        </li>
      ))}
    </ul>
  );
}
