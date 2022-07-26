import axios from "axios";

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeVideosOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

//fetch data using axios
export const fetchData = async (url, options) => {
  try {
    const response = await axios(url, options);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
