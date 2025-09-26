import axios from "axios";
import { API_BASE } from "../../utils/base_url";

const getAllQuiz = async () => {
  try {
    const response = await axios.get(`${API_BASE}quizzes/`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        error.message ||
        "Failed to fetch quizzes"
    );
  }
};

const getAQuiz = async (id) => {
  try {
    const response = await axios.get(`${API_BASE}quizzes/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || error.message || "Failed to fetch quiz"
    );
  }
};

export const quizService = {
  getAllQuiz,
  getAQuiz,
};
