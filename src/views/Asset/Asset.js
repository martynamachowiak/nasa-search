import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ImagesContext from "../../services/images-context";
import "./Asset.css";

const Asset = () => {
  const { inView } = useContext(ImagesContext);
  const { url, description, title } = inView;

  return (
    <div className="view--asset">
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={url} alt={title} />
      <Link to="/search">Back to search results</Link>
    </div>
  );
};

export default Asset;
