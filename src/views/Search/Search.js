import React, { useContext } from "react";
import { getImages } from "../../request/getImages";
import { SearchTool, SearchResults } from "../../components";
import ImagesContext from "../../services/images-context";

const Search = () => {
  const { images, setImages } = useContext(ImagesContext);

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
