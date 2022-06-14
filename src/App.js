import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Reviews from "./Components/Reviews";

function App() {
  return (
    <div className="App">
      <Header className="Header-banner" />
      <Routes>
        <Route path="/" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
