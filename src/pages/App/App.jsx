import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
import SessionPage from "../SessionPage/SessionPage";
import SessionShowPage from "../SessionShowPage/SessionShowPage";
import AddSessionPage from "../AddSessionPage/AddSessionPage";
import NavBar from "../../components/NavBar/NavBar";
import TechniquePage from "../TechniquePage/TechniquePage";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/sessions" element={<SessionPage user={user} />} />
            <Route
              path="/sessions/*"
              element={<SessionShowPage user={user} />}
            />
            <Route path="/sessions/new" element={<AddSessionPage />} />
            {/* Route components in here */}
            <Route path="/*" element={<Navigate to="/home" />} />
            <Route path="/technique" element={<TechniquePage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
