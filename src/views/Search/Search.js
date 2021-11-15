import React, { useContext } from "react";
import { getImages } from "../../request/getImages";
import { SearchTool, SearchResults } from "../../components";
import ImagesContext from "../../services/images-context";

const Search = () => {
  const { images, setImages } = useContext(ImagesContext);

  const handleSubmit = (fields) => {
    getImages(setImages, fields);
  };
  return (
    <div className="view--search">
      <h1>Nasa Search</h1>
      <SearchTool onSubmit={handleSubmit} />
      <SearchResults images={images} />
    </div>
  );
};

export default Search;
