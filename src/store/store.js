import { configureStore } from "@reduxjs/toolkit";
import markDownSlice from "./markDownSlice";

const store = configureStore({
  reducer: { markdown: markDownSlice.reducer },
});

export default store;
