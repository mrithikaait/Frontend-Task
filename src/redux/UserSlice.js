import { createSlice } from "@reduxjs/toolkit";
import {
  fetchUsers,
  addUser,
  deleteUser,
  updateUser,
} from "./UserThunks";

const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],          // ✅ MUST be array
    page: 1,
    limit: 10,
    total: 0,
    loading: false,
    error: null,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder

      /* FETCH USERS */
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;

        // ✅ adjust based on backend response
        state.list = action.payload.users || action.payload || [];
        state.total =
          action.payload.total ||
          action.payload.count ||
          state.list.length;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ADD USER */
      .addCase(addUser.fulfilled, (state, action) => {
        state.list.unshift(action.payload);
        state.total += 1;
      })

      /* DELETE USER */
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (u) => u._id !== action.payload
        );
        state.total -= 1;
      })

      /* UPDATE USER */
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (u) => u._id === action.payload._id
        );
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      });
  },
});

export const { setPage, setLimit } = userSlice.actions;
export default userSlice.reducer;
