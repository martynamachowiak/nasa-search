import "./App.css";
import { useState, useEffect } from "react";
import { getImages } from "./request/getImages";
import SearchTool from "./components/SearchTool/SearchTool";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages(setImages);
  }, []);

  const handleSubmit = (query) => {
    getImages(setImages, query);
  };

  return (
    <div className="App">
      <h1>Nasa Search</h1>
      <SearchTool onSubmit={handleSubmit} />
      <SearchResults images={images} />
    </div>
  );
}

export default App;
