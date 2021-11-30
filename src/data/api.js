import axios from "axios";
import { randomNumberInRange } from "../utils/utils";

export const getRandomQuote = async () => {
  // 1 in 20 chance to get specific quote
  if (randomNumberInRange(1, 20) === 20) {
    return {
      text: "Dream big, think small",
      author: "Andy Evans",
    };
  }

  try {
    const { data } = await axios.get("https://type.fit/api/quotes");
    return data[Math.floor(Math.random() * data.length)];
  } catch (error) {
    console.error(error);
  }
};
