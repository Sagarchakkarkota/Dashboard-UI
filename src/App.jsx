import "./App.css";
import Home from "./Pages/Dashboard/Home/Home";
import Members from "./Pages/Dashboard/Members/Members";
import Users from "./Pages/Dashboard/users/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members/:id" element={<Members />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
