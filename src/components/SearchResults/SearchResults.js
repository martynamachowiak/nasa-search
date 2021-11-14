import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";

const SearchResults = ({ images }) => {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <Thumbnail image={image} />
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
