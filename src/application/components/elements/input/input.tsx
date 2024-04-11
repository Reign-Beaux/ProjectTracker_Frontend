import CloseIcon from "@mui/icons-material/Close";
import { IconButton, InputAdornment, StandardTextFieldProps, TextField } from "@mui/material";
import { FormSettings } from "application/settings/forms/models";
import { useEffect, useState } from "react";

export interface InputProps extends StandardTextFieldProps {
  inputKey: string;
  inputText: string;
  clereable?: boolean;
  formSettings: FormSettings;
}

export const Input = ({ inputKey, inputText, formSettings, ...rest }: InputProps) => {
  const [showClearableButton, setShowClearableButton] = useState(false);

  const clearInput = () => {
    formSettings.setFieldValue(inputKey, "");
    setShowClearableButton(false);
  };

  useEffect(() => {
    if (formSettings.values[inputKey].length > 0) setShowClearableButton(true);
  }, [formSettings.values[inputKey]]);

  return (
    <TextField
      id={inputKey}
      label={inputText}
      variant="standard"
      fullWidth
      margin="normal"
      value={formSettings.values[inputKey]}
      onChange={formSettings.handleChange}
      onBlur={formSettings.handleBlur}
      error={formSettings.touched[inputKey] && Boolean(formSettings.errors[inputKey])}
      helperText={formSettings.touched[inputKey] && formSettings.errors[inputKey]?.toString()}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" style={{ marginBottom: "10px" }}>
            {showClearableButton && (
              <IconButton aria-label="toggle password visibility" onClick={clearInput} edge="end">
                <CloseIcon />
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
      style={{ marginTop: "0" }}
      autoComplete="off"
      {...rest}
    />
  );
};
