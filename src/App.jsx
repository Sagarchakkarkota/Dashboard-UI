import "./App.css";
import Home from "./Pages/Dashboard/Home/Home";
import Members from "./Pages/Dashboard/Members/Members";
import Users from "./Pages/Dashboard/users/Users";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Trans from "./Pages/transactions/trans";
import Login from "./Pages/Dashboard/Login/Login";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/members/:id" element={<Members />} />
            <Route path="/users" element={<Users />} />
            <Route path="/trans" element={<Trans />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
