import { Button, Card, CardActions, CardContent, Stack } from "@mui/material";
import { contactPropertyNames, IContact } from "api/fetchDataTypes";
import { TextInputValidation } from "./common/TextInputValidation";
import { fetchAPI, IFetchResult } from "api/fetchApi";
import { useEffect, useState } from "react";
import { rules } from "utils/rules";
import { delayStateSet, setInputValue } from "utils/componentHelpers";
import { LoadButton } from "./common/LoadButton";
import { useActions } from "hooks/useActions";

interface IContactFormProps {
  contact?: IContact;
  onSend: () => void;
}

export const ContactForm = ({ contact, onSend }: IContactFormProps) => {
  let [formData, set_formData] = useState({} as IContact) as [
    IContact,
    React.Dispatch<React.SetStateAction<{}>>
  ];

  let [errText, set_errText] = useState("");
  const { contactsAddOne } = useActions();
  const [trigFu, resData] = fetchAPI.useAddContactMutation();

  const validate = () => {
    let isOk = true;
    Object.values(formData).forEach((el) => {
      isOk &&= !!el;
    });
    if (!isOk) {
      delayStateSet("Не все поля заполнены(", set_errText);
    } else {
      trigFu({ body: formData });
    }
  };

  useEffect(() => {
    if (resData.isSuccess) {
      contactsAddOne(formData);
      onSend();
    }

    if (resData.isError) {
      delayStateSet("Error", set_errText);
    }
  }, [resData]);

  useEffect(() => {
    contact && set_formData(contact);
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Stack spacing={1}>
          <TextInputValidation
            value={formData?.name}
            variant="filled"
            label="Name"
            validate={rules.userNameValid}
            disabled={false}
            onInput={setInputValue(contactPropertyNames.name, set_formData)}
          />
          <TextInputValidation
            value={formData?.username}
            variant="filled"
            label="username"
            validate={rules.userNameValid}
            disabled={false}
            onInput={setInputValue(contactPropertyNames.username, set_formData)}
          />
          <TextInputValidation
            value={formData?.email}
            variant="filled"
            label="email"
            type="email"
            validate={rules.emailValid}
            disabled={false}
            onInput={setInputValue(contactPropertyNames.email, set_formData)}
          />
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        <LoadButton
          label={errText ? errText : "Save"}
          isError={!!errText}
          isLoading={resData.isLoading}
          onClick={validate}
          sx={{ mr: 2 }}
        />
        <Button variant="contained" onClick={onSend}>
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
};
