import { appActionCreators } from "./app/action-creators";
import { contactsActionCreators } from "./contacts/action-creators";

export const allActionCreators = {
  ...appActionCreators,
  ...contactsActionCreators,
};
