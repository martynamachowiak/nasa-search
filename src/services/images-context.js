import { createContext } from "react";

const ImagesContext = createContext({
  images: [],
  setImages: () => {},
  inView: {},
  setInView: () => {},
});

export default ImagesContext;
