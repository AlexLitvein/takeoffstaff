import { createSlice } from "@reduxjs/toolkit";
import { IContact } from "api/fetchDataTypes";

export interface IAction<T> {
  payload: T;
  type: string;
}

const appInitialState = {
  isAuth: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {
    setAuth(state, action: IAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
