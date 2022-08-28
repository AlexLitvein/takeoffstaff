import { IContact } from "api/fetchDataTypes";
import { AppDispatch } from "..";
import { contactsActions } from "./slicer";

export const contactsActionCreators = {
  contactsAddOne: (contact: IContact) => async (dispatch: AppDispatch) => {
    dispatch(contactsActions.addOne(contact));
  },
  contactsAddMany: (contacts: IContact[]) => async (dispatch: AppDispatch) => {
    dispatch(contactsActions.addMany(contacts));
  },
  contactsSetAll: (contacts: IContact[]) => async (dispatch: AppDispatch) => {
    dispatch(contactsActions.setAll(contacts));
  },
  contactsRemoveAll: () => async (dispatch: AppDispatch) => {
    dispatch(contactsActions.removeAll());
  },
  contactsRemoveOne: (id: number) => async (dispatch: AppDispatch) => {
    dispatch(contactsActions.removeOne(id));
  },
};
