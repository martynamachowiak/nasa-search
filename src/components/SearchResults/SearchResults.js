import React from "react";
import PropTypes from "prop-types";
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

SearchResults.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      url: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};
