import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // mock API
});

// Mock register function
export const registerUser = async (userData) => {
  return await API.post("/users", userData);
};

// Mock login function
export const loginUser = async (credentials) => {
  return await API.post("/posts", credentials); // just simulating a login request
};
