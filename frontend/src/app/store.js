import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import tokenReducer from "../features/User/tokenSlice";
import userReducer from "../features/User/userSlice";
export default configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
  },
  middleware: [...getDefaultMiddleware()],
});
