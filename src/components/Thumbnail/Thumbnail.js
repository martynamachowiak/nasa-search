import React from "react";

const Thumbnail = ({ image }) => {
  const { url, title } = image;
  return (
    <div>
      <img src={url} alt={title} />
    </div>
  );
};

export default Thumbnail;
