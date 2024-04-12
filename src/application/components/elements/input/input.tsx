import { StandardTextFieldProps, TextField } from "@mui/material";
import { FormSettings } from "application/settings/forms/models";

export interface InputProps extends StandardTextFieldProps {
  inputKey: string;
  inputText: string;
  clereable?: boolean;
  formSettings: FormSettings;
}

export const Input = ({ inputKey, inputText, formSettings, ...rest }: InputProps) => {
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
      style={{ marginTop: "0" }}
      autoComplete="off"
      {...rest}
    />
  );
};
