import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ImagesContext from "../../services/images-context";

const Thumbnail = ({ image }) => {
  const navigate = useNavigate();
  const { id, url, title } = image;
  const { setInView } = useContext(ImagesContext);

  const handleClick = () => {
    navigate(`/asset/${id}`);
    setInView(image);
  };

  return (
    <button type="button" onClick={handleClick}>
      <img src={url} alt={title} />
    </button>
  );
};

export default Thumbnail;
