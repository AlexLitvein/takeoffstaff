import React, { useEffect, useState } from "react";
import { InputAdornment, SxProps, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IValidationFunc } from "utils/rules";
import IconButton from "@mui/material/IconButton";
import { IMaskInput } from "react-imask";
import NumberFormat, { InputAttributes } from "react-number-format";

const NumberFormatCustom = React.forwardRef<
  NumberFormat<InputAttributes>,
  CustomProps
>(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
});

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="+{7}(000) 000-00-00"
        inputRef={ref as any}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);

export interface ITextInputValidationProps {
  label: string;
  value?: string;
  type?: string;
  variant?: "outlined" | "filled" | "standard";
  validate: IValidationFunc;
  onInput?: (value: string) => void;
  sx?: SxProps;
  multiline?: boolean;
  maxRows?: number;
  rows?: number;
  placeholder?: string;
  disabled?: boolean;
}

export const TextInputValidation = ({
  value,
  type = "text",
  validate,
  onInput,
  ...props
}: ITextInputValidationProps) => {
  let [text, setText] = useState("");
  let [error, seterror] = useState("");
  let [showpass, setshowpass] = useState(type !== "password");

  const input = (event: React.ChangeEvent<HTMLInputElement>) => {
    const [result, error] = validate(event.target.value);
    setText(result);
    seterror(error);
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => {
    setshowpass((prev) => !prev);
  };
  useEffect(() => {
    onInput && onInput(!!error ? "" : text);
  }, [text]);

  useEffect(() => {
    setText(value ? value : "");
  }, [value]);

  return (
    <TextField
      {...props}
      error={!!error}
      required
      type={showpass ? (type === "password" ? "text" : type) : "password"}
      fullWidth
      value={text}
      onInput={input}
      helperText={error}
      InputProps={
        type === "password"
          ? {
              endAdornment: (
                <InputAdornment position="end" sx={{ zIndex: 1 }}>
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showpass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : type === "phone"
          ? { inputComponent: TextMaskCustom as any }
          : undefined
      }
    />
  );
};
