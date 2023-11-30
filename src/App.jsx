import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Dashboard/Home/Home";
import Login from "./Pages/Dashboard/Login/Login";
import Members from "./Pages/Dashboard/Members/Members";
import Users from "./Pages/Dashboard/users/Users";
import Trans from "./Pages/transactions/trans";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          {/* 
          <Route path="/members/:id" element={<Members />} />
          <Route path="/users" element={<Users />} />
          <Route path="/trans" element={<Trans />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
