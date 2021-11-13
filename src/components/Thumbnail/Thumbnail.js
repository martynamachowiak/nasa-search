import React from "react";

const Thumbnail = ({ image }) => {
  const { url, alt } = image;
  return (
    <div>
      <img src={url} alt={alt} />
    </div>
  );
};

export default Thumbnail;
