import "./App.css";
import { useState, useEffect } from "react";
import Thumbnail from "./components/Thumbnail/Thumbnail";
import { getImages } from "./request/getImages";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages("sun", setImages);
  }, []);

  return (
    <div className="App">
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
