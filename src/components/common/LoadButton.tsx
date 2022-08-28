import React, { useState, useEffect } from "react";
import { LoadingButton } from "@mui/lab";
import { CircularProgress, SxProps, Typography } from "@mui/material";

export interface ILoadButtonProps {
  label: string;
  // errText: string;
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
      // sx={{
      //   height: inputHeight,
      //   bgcolor: 'common.black',
      //   mt: 5,
      // '&.MuiButtonBase-root:hover': {
      //   bgcolor: 'common.black',
      // },
      // '&:hover': {
      //   bgcolor: 'common.black',
      // },
      // '&.MuiButtonBase-root.Mui-disabled': {
      //   bgcolor: 'common.black',
      // },
      // }}
    >
      <Typography
      // sx={{
      //   textTransform: 'initial',
      //   color: isError ? 'error.light' : 'inherit',
      // }}
      >
        {label}
      </Typography>
    </LoadingButton>
  );
};
