import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.user);
  const { token } = user;

  return (
    <div className="dark">
      <Router>
        <Routes>
          <Route
            path="/"
            element={token ? <Home /> : <Navigate to="/login" />}
            // element={<Home />}
          />
          <Route
            path="/register"
            element={!token ? <Register /> : <Navigate to="/" />}
            // element={<Register />}
          />
          <Route
            path="/login"
            element={!token ? <Login /> : <Navigate to="/" />}
            // element={<Login />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
