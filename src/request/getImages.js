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

export const getImages = (setImages, fields, setMessage) => {
  const endpoint = buildEndpoint(fields);

  axios
    .get(endpoint, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      const { status, data } = response;

      switch (status) {
        case 200:
          const images = data.collection.items.map((imageSource) => {
            return {
              id: imageSource.data[0].nasa_id,
              url: imageSource.links[0].href,
              description: imageSource.data[0].description,
              title: imageSource.data[0].title,
            };
          });
          setImages(images);
          break;
        case 404:
          setMessage(
            "We can't find what you're looking for. Please try again."
          );
          break;
        case 500:
          setMessage("Please try again later.");
          console.error(status, "Server error");
          break;
        default:
          break;
      }
    });
};
