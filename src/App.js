import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./Contexts/UserContext";
import "./App.css";
import Header from "./Components/Header";
import Reviews from "./Components/Reviews";
import Review from "./Components/Individual-Review";

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
          <Route path="/reviews/categories/:category" element={<Reviews />} />
          <Route path="/reviews/:review_id" element={<Review />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
