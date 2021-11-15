import axios from "axios";

const buildEndpoint = ({ query, searchCriteria }) => {
  let endpointBase = "https://images-api.nasa.gov/search?";
  if (query.length === 0) {
    return `${endpointBase}&media_type=image`;
  }

  const media =
    searchCriteria.length === 0
      ? "&media_type=image,video"
      : `&media_type=${searchCriteria.join()}`;
  return `${endpointBase}${media}&q=${query}`;
};

export const getImages = (setImages, fields) => {
  const endpoint = buildEndpoint(fields);

  axios
    .get(endpoint, {
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
