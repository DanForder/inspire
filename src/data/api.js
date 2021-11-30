import axios from "axios";

export const getRandomQuote = async () => {
  try {
    const { data } = await axios.get("https://type.fit/api/quotes");
    return data[Math.floor(Math.random() * data.length)];
  } catch (error) {
    console.error(error);
  }
};
