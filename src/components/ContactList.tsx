import React, { useState, useEffect } from "react";
import { Stack, SxProps, Typography } from "@mui/material";
import { fetchAPI, IFetchResult } from "api/fetchApi";
import { IContact } from "api/fetchDataTypes";
import { FetchingProgress } from "./common/FetchingProgress";
import { useAppSelector } from "store/reducers";
import { contactsSelectors } from "store/reducers/contacts/slicer";
import { useSelector } from "react-redux";
import { ContactCard } from "./ContactCard";
import { useActions } from "hooks/useActions";

export interface IContactListProps {
  params: Object;
  onClick: (contact: IContact) => void;
}

export const ContactList = ({ params, onClick }: IContactListProps) => {
  const contacts = useSelector(contactsSelectors.selectAll);
  const { contactsSetAll, contactsRemoveOne } = useActions();

  let resData = fetchAPI.useGetContactsQuery({
    // params: { _page: 1, _limit: 5 },
    params,
  }) as IFetchResult<IContact[]>;

  const delItem = (id: number) => {
    contactsRemoveOne(id);
  };

  useEffect(() => {
    resData.data && contactsSetAll(resData.data);
  }, [resData.data]);

  return (
    <Stack spacing={2}>
      {contacts.map((el, idx, arr) => (
        <ContactCard
          key={idx}
          contact={el}
          onClick={onClick}
          onDelete={delItem}
        />
      ))}
      <FetchingProgress fetchResponse={resData} />
    </Stack>
  );
};
