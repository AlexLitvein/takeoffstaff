import { IContact } from "api/fetchDataTypes";
import { AppDispatch } from "..";
import { appActions } from "./appSlicer";

export const appActionCreators = {
  setAuth: (isAuth: boolean) => async (dispatch: AppDispatch) => {
    dispatch(appActions.setAuth(isAuth));
  },
};
