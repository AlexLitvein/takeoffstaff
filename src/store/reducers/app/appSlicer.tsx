import { createSlice } from "@reduxjs/toolkit";
import { IContact } from "api/fetchDataTypes";
// import { appInitialState } from "initApp/init";

export interface IAction<T> {
  payload: T;
  type: string;
}

const appInitialState = {
  isAuth: false,
  // currEditContact: undefined as IContact | undefined,
};

export const appSlice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {
    setAuth(state, action: IAction<boolean>) {
      state.isAuth = action.payload;
    },

    // setCurrEditContact(state, action: IAction<IContact>) {
    //   state.currEditContact = action.payload;
    // },
  },
});

export const appActions = appSlice.actions;
