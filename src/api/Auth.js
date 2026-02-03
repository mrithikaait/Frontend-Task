import api from "./Axios";

export const loginUser =  async (data) => {
  return api.post("/auth/login", data);
};

// Reset password
export const resetPassword = (token, newPassword) => {
  return api.post("/auth/reset-password", {
    token,
    newPassword,
  });
};
