import "./App.css";
import { useState, useEffect } from "react";
import Thumbnail from "./components/Thumbnail/Thumbnail";
import { getImages } from "./request/getImages";
import SearchTool from "./components/SearchTool/SearchTool";

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
      <SearchTool onSubmit={handleSubmit} />
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <Thumbnail image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
