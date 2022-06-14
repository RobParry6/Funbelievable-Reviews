import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Reviews from "./Components/Reviews";
import { UserContext } from "./Contexts/UserContext";

function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header className="Header-banner" />
        <Routes>
          <Route path="/" element={<Reviews />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
