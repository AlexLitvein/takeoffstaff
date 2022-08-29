import React, { useState } from "react";
import { rules } from "utils/rules";
import { Stack, Typography } from "@mui/material";
import { TextInputValidation } from "../common/TextInputValidation";
import { useNavigate } from "react-router-dom";
import { useActions } from "hooks/useActions";
import { LoadButton } from "components/common/LoadButton";
import { delayStateSet, setInputValue } from "utils/componentHelpers";
import { IUserLogin, userLoginPropertyNames } from "api/fetchDataTypes";
import { RouteNames } from "router/AppRouter";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setAuth } = useActions();

  let [formData, set_formData] = useState({}) as [
    IUserLogin,
    React.Dispatch<React.SetStateAction<{}>>
  ];
  let [errText, set_errText] = useState("");
  const validate = () => {
    let isOk = true;
    Object.values(formData).forEach((el) => {
      isOk &&= !!el;
    });
    if (!isOk) {
      delayStateSet("Не все поля заполнены(", set_errText);
    }
    setAuth(isOk);
    navigate(RouteNames.CONTACTS);
  };

  return (
    <Stack spacing={2} sx={{ width: "300px" }}>
      <Typography variant="h6">Вход</Typography>
      <TextInputValidation
        label="Имя пользователя (email)"
        validate={rules.userNameValid}
        onInput={setInputValue(userLoginPropertyNames.name, set_formData)}
      />
      <TextInputValidation
        label="Пароль"
        type="password"
        validate={rules.passwordValid}
        onInput={setInputValue(userLoginPropertyNames.password, set_formData)}
      />
      <LoadButton
        label={errText ? errText : "Войти"}
        isError={!!errText}
        isLoading={false}
        onClick={validate}
      />
    </Stack>
  );
};

export default LoginForm;
