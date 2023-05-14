import { createSlice } from "@reduxjs/toolkit";
import { marked } from "marked";

const initialState = {
  markdownData: "",
  previewData: "",
};

marked.use({
  breaks: true,
  mangle: false,
  headerIds: false,
});
const markDownSlice = createSlice({
  name: "markdown",
  initialState,
  reducers: {
    updateMarkdown(state, action) {
      state.markdownData = action.payload;
      state.previewData = marked(state.markdownData);
    },
  },
});
export const markdownAction = markDownSlice.actions;
export default markDownSlice;
