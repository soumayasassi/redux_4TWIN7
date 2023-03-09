import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      email: "",
      nom: "",
    },
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = {
        email: "",
        nom: "",
      };
      {/*ou action.payload et j'envoie les données au niveau du bouton  */}
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
