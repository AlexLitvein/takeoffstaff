import React, { useState, useEffect } from "react";
import { Container, Stack, SxProps, Typography } from "@mui/material";
import LoginForm from "components/auth/LoginForm";

export interface IAuthPageProps {
  //  tag: string;
  //  sx?: SxProps;
  //  children?: React.ReactNode[];
}

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
