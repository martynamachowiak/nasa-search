import React from "react";
import { Thumbnail } from "../";
import "./SearchResults.css";

const SearchResults = ({ images }) => {
  return (
    <ul className="grid--search-results">
      {images.map((image) => (
        <li key={image.id} className="grid__item">
          <Thumbnail image={image} />
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
