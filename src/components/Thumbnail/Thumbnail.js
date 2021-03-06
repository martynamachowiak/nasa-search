import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ImagesContext from "../../services/images-context";
import "./Thumbnail.css";

const Thumbnail = ({ image }) => {
  const navigate = useNavigate();
  const { id, url, title } = image;
  const { setInView } = useContext(ImagesContext);

  const handleClick = () => {
    navigate(`/asset/${id}`);
    setInView(image);
  };

  return (
    <button className="thumbnail" type="button" onClick={handleClick}>
      <img src={url} alt={title} />
    </button>
  );
};

export default Thumbnail;

Thumbnail.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
