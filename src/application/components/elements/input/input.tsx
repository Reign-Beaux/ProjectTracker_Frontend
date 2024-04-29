import { StandardTextFieldProps, TextField } from "@mui/material";

export interface InputProps extends StandardTextFieldProps {
  inputKey: string;
  inputText: string;
  clereable?: boolean;
  formSettings: any;
}

export const Input = ({ inputKey, inputText, formSettings, ...rest }: InputProps) => {
  return (
    <TextField
      id={inputKey}
      label={inputText}
      variant="standard"
      margin="normal"
      fullWidth
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
