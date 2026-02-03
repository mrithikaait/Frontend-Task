// import axios from "axios";

// const API_URL = "http://localhost:3003";

// export const getUsers = () => {
//   return axios.get(`${API_URL}/users`);
// };

// export const addUser = (data) => {
//   return axios.post(`${API_URL}/users`, data);
// };

// export const updateUser = (id: string, data) => {
//   return axios.put(`${API_URL}/users/${id}`, data);
// };

// export const deleteUser = (id: string) => {
//   return axios.delete(`${API_URL}/users/${id}`);
// };

import api from "./Axios";

// GET users (pagination + filters)
export const getUsersApi = (params) => {
  return api.get("/users", { params });
};

// ADD user
export const addUserApi = (data) => {
  return api.post("/users", data);
};

// UPDATE user
export const updateUserApi = (id, data) => {
  return api.put(`/users/${id}`, data);
};

// DELETE user
export const deleteUserApi = (id) => {
  return api.delete(`/users/${id}`);
};
