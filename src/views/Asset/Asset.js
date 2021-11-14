import React from "react";
import { useParams } from "react-router-dom";

const Asset = () => {
  // const images = useContext(MyContext);

  const { id } = useParams();
  return <div>Asset: {id}</div>;
};

export default Asset;
