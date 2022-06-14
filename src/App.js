import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Reviews from "./Components/Reviews";
import { UserContext } from "./Contexts/UserContext";

function App() {
  const [loggedInuser, setLoggedInUser] = useState({
    username: "Not Logged In",
  });

  return (
    <UserContext.Provider value={{ loggedInuser, setLoggedInUser }}>
      <div className="App">
        <Header className="Header-banner" />
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/reviews/:category" element={<Reviews />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
