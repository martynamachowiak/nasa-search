import React, { useContext } from "react";
import { getImages } from "../../request/getImages";
import { SearchTool, SearchResults } from "../../components";
import ImagesContext from "../../services/images-context";

const Search = () => {
  const { images, setImages, message, setMessage } = useContext(ImagesContext);

  const handleSubmit = (fields) => {
    getImages(setImages, fields, setMessage);
  };
  return (
    <div className="view--search">
      <h1>Nasa Search</h1>
      <SearchTool onSubmit={handleSubmit} />
      {message !== "" && <p>{message}</p>}
      <SearchResults images={images} />
    </div>
  );
};

export default Search;
