import { createSlice } from "@reduxjs/toolkit";
import UserApi from "../apis/user";

const { actions, reducer } = createSlice({
  name: "User",
  initialState: {
    accessToken: "",
    refreshToken: "",
    user: null,
  },
  reducers: {
    loginAction: (state, action) => {
      const { accessToken, refreshToken, userId } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.user = { userId };
    },
    getProfileAction: (state, action) => {
      const {
        email,
        firstName,
        lastName,
        id,
        password,
        permissionLevel,
        essay,
        videoUrl,
        tags,
        title,
      } = action.payload;
      state.user = {
        ...state.user,
        email,
        firstName,
        lastName,
        userId: id,
        password,
        permissionLevel,
        essay,
        videoUrl,
        tags,
        title,
      };
    },
    logoutAction: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
    },
  },
});

const { loginAction, logoutAction, getProfileAction } = actions;

export const login = (email, password) => (dispatch) =>
  new Promise((resolve, reject) => {
    UserApi.login(email, password)
      .then((res) => {
        if (res.status === 500) {
          reject(new Error("Server is not available!"));
          return;
        }
        res.json().then((json) => {
          if (json) {
            dispatch(loginAction(json));
            resolve(
              !(
                Object.keys(json).includes("errors") ||
                Object.keys(json).length === 0
              )
            );
          } else {
            reject(new Error(json.error));
          }
        });
      })
      .catch(() => {
        reject(new Error("Server is not available!"));
      });
  });

export const register = (firstName, lastName, email, password, ip) => () =>
  new Promise((resolve, reject) => {
    UserApi.register(firstName, lastName, email, password, ip)
      .then((res) => {
        if (res.status === 500) {
          reject(new Error("Server is not available!"));
          return;
        }
        res.json().then((json) => {
          if (json) {
            resolve(true);
          }
        });
      })
      .catch(() => {
        reject(new Error("Server is not available!"));
      });
  });

export const getProfile = (token, userId) => (dispatch) =>
  new Promise((resolve, reject) => {
    UserApi.getProfile(token, userId)
      .then((res) => {
        if (res.status === 500) {
          reject(new Error("Server is not available!"));
          return;
        }
        res.json().then((json) => {
          if (json) {
            dispatch(getProfileAction(json));
            resolve();
          } else {
            reject(new Error(json.error));
          }
        });
      })
      .catch(() => {
        reject(new Error("Server is not available!"));
      });
  });

export const updateProfile = (
  token,
  userId,
  firstName,
  lastName,
  email,
  password,
  videoUrl,
  essay,
  tags,
  title
) => () =>
  new Promise((resolve, reject) => {
    UserApi.updateUser(
      token,
      userId,
      firstName,
      lastName,
      email,
      password,
      videoUrl,
      essay,
      tags,
      title
    )
      .then(async (res) => {
        if (res.status === 500) {
          reject(new Error("Server is not available!"));
          return;
        }
        resolve();
      })
      .catch((e) => {
        console.log(e);
        reject(new Error("Server is not available!"));
      });
  });

export const logout = () => (dispatch) => dispatch(logoutAction());

export default reducer;
