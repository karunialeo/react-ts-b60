import JudulHalaman from "./components/MyTitle";
import "./assets/styles/App.css";
import UserList from "./components/UserList";
import UserListDummy from "./utils/DummyList";

// component App
function App() {
  return (
    <div>
      <JudulHalaman title={"Belajar Typescript"} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque enim
        quisquam voluptas ad illum labore asperiores id consectetur voluptatibus
        perspiciatis.
      </p>

      <JudulHalaman title="Belajar React" />

      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        Contoh Link
      </a>

      <MyButton />

      <UserList users={UserListDummy} />
    </div>
  );
}

// component tombol/button
function MyButton() {
  return (
    <div style={{ marginTop: "20px" }}>
      <button type="button" onClick={() => alert("test button")}>
        Tombol Saya
      </button>
    </div>
  );
}

export default App;
