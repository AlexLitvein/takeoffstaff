import React, { useState, useEffect } from "react";
import { LoadingButton } from "@mui/lab";
import { CircularProgress, SxProps, Typography } from "@mui/material";

export interface ILoadButtonProps {
  label: string;
  isError: boolean;
  isLoading: boolean;
  onClick: () => void;
  sx?: SxProps;
}

export const LoadButton = ({
  label,
  isError,
  isLoading,
  onClick,
  ...rest
}: ILoadButtonProps) => {
  return (
    <LoadingButton
      {...rest}
      variant="contained"
      loading={isLoading}
      loadingPosition="center"
      onClick={onClick}
      loadingIndicator={<CircularProgress color="info" size={32} />}
    >
      <Typography>{label}</Typography>
    </LoadingButton>
  );
};
