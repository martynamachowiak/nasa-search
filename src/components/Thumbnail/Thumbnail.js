import React from "react";

const Thumbnail = ({ image }) => {
  const { url, title } = image;
  return <img src={url} alt={title} />;
};

export default Thumbnail;
