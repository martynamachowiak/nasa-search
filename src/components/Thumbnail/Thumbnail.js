import React from "react";

const Thumbnail = ({ image }) => {
  const { url, title } = image;
  return (
    <a>
      <img src={url} alt={title} />
    </a>
  );
};

export default Thumbnail;
