import React, { useState, useEffect } from "react";
import { Container, Stack, SxProps, Typography } from "@mui/material";
import LoginForm from "components/auth/LoginForm";

export interface IAuthPageProps {}

export const AuthPage = ({}: IAuthPageProps) => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoginForm />
    </Container>
  );
};
