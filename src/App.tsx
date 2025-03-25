import { RouterProvider } from "react-router-dom";
import "./assets/styles/App.css";
import { AuthProvider } from "./contexts/auth";
import router from "./routes";

// component App
function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
