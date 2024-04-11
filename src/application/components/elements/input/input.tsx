import { StandardTextFieldProps, TextField } from "@mui/material";
import { FormSettings } from "application/settings/forms/models";

interface InputProps extends StandardTextFieldProps {
  inputKey: string;
  inputText: string;
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
      style={{marginTop: "0"}}
      {...rest}
    />
  );
};
