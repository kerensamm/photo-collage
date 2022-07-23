const URL = "https://api.pexels.com/v1/";
const KEY = "563492ad6f91700001000001a0cc217c98e54c7b8af24f18b3e1b825";
const PER_PAGE = 40;

const headers = {
  Authorization: KEY,
  "Content-Type": "application/x-www-form-urlencoded",
};

export const getImagesStart = async () => {
  return await fetchGet(`${URL}curated?per_page=${PER_PAGE}`);
};
export const getSampleImages = async () => {
  return await fetchGet(`${URL}curated?per_page=6`);
};

const fetchGet = async (url) => {
  const response = await fetch(url, {
    mode: "cors",
    headers,
  });
  return response.json();
};
