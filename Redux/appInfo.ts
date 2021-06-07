import { createSlice } from "@reduxjs/toolkit";

const AppInfoVisibility = createSlice({
  name: "appInfoVisibility",
  initialState: {
    showAppInfo: <boolean>false,
  },
  reducers: {
    changeAppInfoVisibility: (state) => {
      state.showAppInfo = !state.showAppInfo;
      //console.log(state.showAppInfo);
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeAppInfoVisibility } = AppInfoVisibility.actions;

export default AppInfoVisibility.reducer;
