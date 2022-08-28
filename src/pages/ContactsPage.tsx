import React, { useState, ChangeEvent } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { ContactList } from "components/ContactList";
import { ContactForm } from "components/ContactForm";
import { IContact } from "api/fetchDataTypes";

export interface IContactsProps {}

export const ContactsPage = ({}: IContactsProps) => {
  let [isAdd, set_isAdd] = useState(false);
  let [findStr, set_findStr] = useState("");
  let [params, set_params] = useState({ _page: 1, _limit: 5 } as Object);
  let [contact, set_contact] = useState(undefined as IContact | undefined);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    set_findStr(event.target.value);
  };

  const send = () => {
    set_isAdd(false);
  };

  const find = () => {
    let p = { _page: 1, _limit: 5 } as Object;
    if (findStr) {
      p = { username: findStr };
    }
    set_params(p);
  };

  const click = (contact: IContact) => {
    set_contact(contact);
    set_isAdd(true);
  };

  const add = () => {
    set_isAdd(true);
    set_contact(undefined);
  };

  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} sx={{ mb: 3, alignItems: "center" }}>
        <Typography>find by user name</Typography>
        <TextField value={findStr} onChange={handleInputChange} />
        <Button variant="contained" onClick={find}>
          Find
        </Button>
        <Button variant="contained" onClick={add}>
          Add
        </Button>
      </Stack>
      {isAdd && <ContactForm contact={contact} onSend={send} />}
      <ContactList onClick={click} params={params} />
    </Stack>
  );
};
