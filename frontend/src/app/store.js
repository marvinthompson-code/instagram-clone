import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import tokenReducer from "../features/User/tokenSlice";
import userReducer from "../features/User/userSlice";
import loadingReducer from "../features/Loading/loadingSlice"
import logger from "redux-logger";

export default configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
    loading: loadingReducer
  },
  middleware: [...getDefaultMiddleware(), logger],
});
