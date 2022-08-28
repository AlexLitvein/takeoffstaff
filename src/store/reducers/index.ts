import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { fetchAPI } from "api/fetchApi";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { appSlice } from "./app/appSlicer";
import { contactsSlice } from "./contacts/slicer";

const rootReducer = combineReducers({
  app: appSlice.reducer,
  contacts: contactsSlice.reducer,
  [fetchAPI.reducerPath]: fetchAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
