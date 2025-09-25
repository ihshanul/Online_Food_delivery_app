import axios from "axios";

const apiUrl = "http://localhost:8080/api";

export const registerUser = async (data) => {
  try {
    const response = await axios.post(apiUrl + "/register", data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const login = async (data) => {
  try {
    const response = await axios.post(apiUrl + "/login", data);
    return response;
  } catch (error) {
    throw error;
  }
};
