import "./App.css";
import Home from "./Pages/Dashboard/Home/Home";
import Members from "./Pages/Dashboard/Members/Members";
import Users from "./Pages/Dashboard/users/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trans from "./Pages/transactions/trans";
function App() {
  return (
    <div className="border-[2px] border-red-500">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members/:id" element={<Members />} />
          <Route path="/users" element={<Users />} />
          <Route path="/trans" element={<Trans />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
