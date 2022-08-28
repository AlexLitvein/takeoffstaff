import React, { useEffect, useState } from "react";
import { rules } from "utils/rules";
import { Checkbox, Link, Stack, Typography } from "@mui/material";
import { TextInputValidation } from "../common/TextInputValidation";
// import SocietyLogin from './SocietyLogin';
// import { fhcAPI, getFetchError } from 'api/fhcService';
import { useNavigate } from "react-router-dom";
// import { IUserLogin, UserLogin } from 'models/requestDataTypes';
import { useActions } from "hooks/useActions";
// import { delayStateSet, setInputValue } from 'utils/componentHelpers';
import { LoadButton } from "components/common/LoadButton";
import { delayStateSet, setInputValue } from "utils/componentHelpers";
import { IUserLogin, userLoginPropertyNames } from "api/fetchDataTypes";
import { RouteNames } from "router/AppRouter";
// import { RouteNames } from "initApp/init";
// import { RouteNames } from 'appInit/init';
// import { LinkRouteStyled } from 'mui/styledComp';

const LoginForm = () => {
  const navigate = useNavigate();
  const { setAuth } = useActions();

  let [formData, set_formData] = useState({}) as [
    IUserLogin,
    React.Dispatch<React.SetStateAction<{}>>
  ];
  let [errText, set_errText] = useState("");
  // let [skipAuth, set_skipAuth] = useState(true);
  // let [skipGetUserProfile, set_skipGetUserProfile] = useState(true);

  // TODO: два запроса в одном в конце страницы https://redux-toolkit.js.org/rtk-query/usage/customizing-queries
  // let resLoginData = fhcAPI.useFetchAuthQuery({ query: '', body: formData }, { skip: skipAuth });
  // let resUser = fhcAPI.useGetUserQuery({ query: `profiles/${formData.email}` }, { skip: skipGetUserProfile });

  const validate = () => {
    let isOk = true;
    Object.values(formData).forEach((el) => {
      isOk &&= !!el;
    });
    if (!isOk) {
      delayStateSet("Не все поля заполнены(", set_errText);
    }
    // set_skipAuth(!isOk);
    setAuth(isOk);
    navigate(RouteNames.CONTACTS);
  };

  // useEffect(() => {
  //   if (resLoginData.isSuccess || resLoginData.isError) {
  //     set_skipAuth(true);
  //   }

  //   if (resLoginData.isSuccess) {
  //     set_skipGetUserProfile(false);
  //   }

  //   if (resLoginData.isError) {
  //     delayStateSet(getFetchError(resLoginData.error), set_errText);
  //   }
  // }, [resLoginData]);

  // useEffect(() => {
  //   if (resUser.isSuccess || resUser.isError) {
  //     set_skipGetUserProfile(true);
  //   }

  //   if (resUser.isSuccess) {
  //     if (resLoginData.data) {
  //       // login(resUser.data, resLoginData.data);
  //       navigate(RouteNames.CONTACTS);
  //     }
  //   }

  //   if (resUser.isError) {
  //     delayStateSet(getFetchError(resUser.error), set_errText);
  //   }
  // }, [resUser]);

  return (
    <Stack spacing={2} sx={{ width: "300px" }}>
      <Typography variant="h6">Вход</Typography>
      <TextInputValidation
        label="Имя пользователя (email)"
        // type="email"
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
