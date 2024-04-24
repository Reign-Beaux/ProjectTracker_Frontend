import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, StandardTextFieldProps } from "@mui/material";
import { useState } from "react";
import { Input } from "../input/input";

interface InputPasswordProps extends StandardTextFieldProps {
  inputKey: string;
  inputText: string;
  formSettings: any;
}

export const InputPassword = ({
  inputKey,
  inputText,
  formSettings,
  ...rest
}: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Input
      inputKey={inputKey}
      inputText={inputText}
      formSettings={formSettings}
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" style={{ marginBottom: "0.625rem", marginRight: "1rem" }}>
            <IconButton
              aria-label="toggle password visibility"
              onClick={toggleShowPassword}
              edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  );
};
