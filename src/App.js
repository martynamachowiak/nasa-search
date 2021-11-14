import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ImagesContext from "./services/images-context";
import { getImages } from "./request/getImages";
import { Asset, Search } from "./views";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [inView, setInView] = useState({});

  const value = {
    images,
    setImages,
    inView,
    setInView,
  };

  useEffect(() => {
    getImages(setImages);
  }, []);

  return (
    <ImagesContext.Provider value={value}>
      <div className="App">
        <Routes>
          <Route exact path="/search" element={<Search />} />
          <Route path="/asset/:id" element={<Asset />} />
        </Routes>
      </div>
    </ImagesContext.Provider>
  );
}

export default App;
