import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IContact } from "api/fetchDataTypes";
import { RootState } from "..";

const contactsAdapter = createEntityAdapter({
  selectId: (entity) => entity.id,
  sortComparer: (a: IContact, b: IContact) => a.name.localeCompare(b.name),
});

interface IContactsInitialState {}

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsAdapter.getInitialState({} as IContactsInitialState),
  reducers: {
    setAll: contactsAdapter.setAll,
    addMany: contactsAdapter.addMany,
    addOne: contactsAdapter.addOne,
    update: contactsAdapter.updateOne,
    removeOne: contactsAdapter.removeOne,
    removeAll: contactsAdapter.removeAll,
  },
});

export const contactsActions = contactsSlice.actions;
export const contactsSelectors = contactsAdapter.getSelectors(
  (state: RootState) => state.contacts
);
