import "./App.css";
import Home from "./Pages/Dashboard/Home/Home";
import Members from "./Pages/Dashboard/Members/Members";
import Users from "./Pages/Dashboard/users/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trans from "./Pages/transactions/trans";
import Login from "./Pages/Dashboard/Login/Login";
function App() {
  return (
    <div className="border-[2px] bg-gradient-to-b from-gray-100 to-gray-200">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/members/:id" element={<Members />} />
          <Route path="/users" element={<Users />} />
          <Route path="/trans" element={<Trans />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
