// import axios from "axios";

import axios from "axios";

export const getImages = (query, setImages) => {
  axios
    .get(`https://images-api.nasa.gov/search?&media_type=image&q=${query}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      const images = response.data.collection.items.map((imageSource) => {
        return {
          id: imageSource.data[0].nasa_id,
          url: imageSource.links[0].href,
          description: imageSource.data[0].description,
          title: imageSource.data[0].title,
        };
      });
      setImages(images);
    });
};
