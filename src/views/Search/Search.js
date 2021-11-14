import React, { useState, useEffect } from "react";
import { getImages } from "../../request/getImages";
import { SearchTool, SearchResults } from "../../components";

const Search = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages(setImages);
  }, []);

  const handleSubmit = (query) => {
    getImages(setImages, query);
  };
  return (
    <>
      <h1>Nasa Search</h1>
      <SearchTool onSubmit={handleSubmit} />
      <SearchResults images={images} />
    </>
  );
};

export default Search;
