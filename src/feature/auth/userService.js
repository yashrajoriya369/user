import axios from "axios";
import { base_url } from "../../utils/base_url";

const register = async (userData) => {
  const response = await axios.post(`${base_url}auth/signup`, userData);
  if (response.data) {
    return response.data;
  }
};

const login = async (userData) => {
  try {
    const response = await axios.post(`${base_url}auth/login`, userData);
    // const { user, token } = response.data;
    const { token } = response.data;
    // const safeUser = {
    //   id: user.id,
    //   fullName: user.fullName,
    //   email: user.email,
    // };
    if (response.data) {
      // localStorage.setItem("user", JSON.stringify(safeUser));
      localStorage.setItem("token", JSON.stringify(token));
      return response.data;
    }
  } catch (error) {
    console.log("Login failed: ", error);
    throw error;
  }
};

export const userService = {
  register,
  login,
};
