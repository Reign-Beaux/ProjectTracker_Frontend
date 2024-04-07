import { Icon } from "application/components/elements";
import { FormSettings } from "application/libs/formik/models";
import { useState } from "react";
import "./styles.css";

export interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  isClearable?: boolean;
  isPassword?: boolean;
  inputName: string;
  inputText: string;
  formSettings: FormSettings;
}

export const Input = ({
  isClearable,
  isPassword,
  inputName,
  inputText,
  formSettings,
  ...props
}: InputProps) => {
  const { setFieldValue, values, handleChange, handleBlur, touched, errors } = formSettings;
  const [typeInput, setTypeInput] = useState<"text" | "password">(
    !!isPassword ? "password" : "text"
  );
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleToggleShowPassword = () => {
    setTypeInput(!showPassword ? "text" : "password");
    setShowPassword((prevState) => !prevState);
  };

  const handleClearClick = () => {
    setFieldValue(inputName, "");
  };

  return (
    <div className="input__group">
      <input
        id={inputName}
        type={typeInput}
        className="input__field"
        value={values![inputName]}
        placeholder={inputText}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
        {...props}
      />
      <Icon
        name={isPassword ? (showPassword ? "VisibilityOff" : "VisibilityOn") : "Close"}
        className="input__action animation-heartbeat"
        onClick={isPassword ? handleToggleShowPassword : handleClearClick}
      />
      <label htmlFor={inputName} className="input__label">
        {inputText}
      </label>
      <span className="input__error">
        {touched[inputName] && !!errors[inputName] ? errors[inputName]?.toString() : ""}
      </span>
    </div>
  );
};
