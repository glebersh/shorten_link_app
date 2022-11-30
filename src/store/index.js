import { configureStore } from "@reduxjs/toolkit";
import linkReducer from './slices/linkSlice';

export default configureStore({
  reducer: {
    linkReducer: linkReducer,
  },
});