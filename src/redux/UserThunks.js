import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUsersApi,
  addUserApi,
  deleteUserApi,
  updateUserApi,
} from "../api/UserApi";

/* FETCH USERS */
export const fetchUsers = createAsyncThunk(
  "users/fetch",
  async (params, { rejectWithValue }) => {
    try {
      const res = await getUsersApi(params);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Fetch users failed");
    }
  }
);

/* ADD USER ✅ (THIS IS WHERE YOU CHANGE) */
export const addUser = createAsyncThunk(
  "users/add",
  async (data, { rejectWithValue }) => {
    try {
      const res = await addUserApi(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Add user failed");
    }
  }
);

/* DELETE USER */
export const deleteUser = createAsyncThunk(
  "users/delete",
  async (id, { rejectWithValue }) => {
    try {
      await deleteUserApi(id);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Delete failed");
    }
  }
);

/* UPDATE USER */
export const updateUser = createAsyncThunk(
  "users/update",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await updateUserApi(id, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Update failed");
    }
  }
);
