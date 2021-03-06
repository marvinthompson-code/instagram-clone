import { createSlice } from "@reduxjs/toolkit";
import { apiURL } from "../../util/apiURL";
import { getFirebaseIdToken } from "../../util/firebaseFunctions";
import { recieveToken } from "./tokenSlice";
import { setLoading } from "../Loading/loadingSlice";
const API = apiURL()
export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    recieveUser: {
      reducer: (state, action) => action.payload,
    },
    logOut: {
      reducer: (state) => null,
    },
  },
});

export const asyncLogout = () => (dispatch) => {
  dispatch(logOut());
};

export const updateUser = (user) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    if (user) {
      const { email, uid } = user;
      const lastLogin = user.metadata.lastSignInTime;
      dispatch(recieveUser({ email, lastLogin, id: uid }));
      const token = await getFirebaseIdToken();
      dispatch(recieveToken(token));
    } else {
      dispatch(recieveUser(null));
    }
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
  }
};

export const { recieveUser, logOut } = userSlice.actions;
export default userSlice.reducer;
