import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import Login from "./Pages/Dashboard/Login/Index";
import Members from "./Pages/Dashboard/Members/Members";
import Users from "./Pages/Dashboard/users/Users";
import Trans from "./Pages/Dashboard/transactions/trans";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const Home = lazy(() => import("src/Pages/Dashboard/Home/index"));
function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              // <ProtectedRoute>
              //   <Login />
              // </ProtectedRoute>
              <Login />

            }
          />

          <Route
            path="/"
            element={
              // <ProtectedRoute>
              //   <Suspense fallback={<div>welcome...</div>}>
              //     <Home />
              //   </Suspense>
              // </ProtectedRoute>
              <Home />

            }
          />

          <Route path="/members/:id" element={<Members />} />
          <Route path="/users" element={<Users />} />
          <Route path="/trans" element={<Trans />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
