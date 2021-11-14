import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Asset, Search } from "./views";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/search" element={<Search />} />
        <Route path="/asset/:id" element={<Asset />} />
      </Routes>
    </div>
  );
}

export default App;
