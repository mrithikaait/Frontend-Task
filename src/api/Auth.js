import api from "./Axios";

export const loginUser = (data) => {
  return api.post("/auth/login", data);
};
