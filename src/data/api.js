import axios from "axios";

export const getRandomQuote = async () => {
  try {
    const { data } = await axios.get("https://type.fit/api/quotes");
    const randomQuote = data[Math.floor(Math.random() * data.length)];
    return randomQuote;
  } catch (error) {
    console.error(error);
  }
};
