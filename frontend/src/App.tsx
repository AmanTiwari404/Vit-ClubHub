import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ClubPage from "./components/ClubPage";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import AddEvent from "./components/AddEvent";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!localStorage.getItem("token")
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/club/:clubName"
          element={isAuthenticated ? <ClubPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/add-event"
          element={isAuthenticated ? <AddEvent /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<LoginPage setAuth={setIsAuthenticated} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
