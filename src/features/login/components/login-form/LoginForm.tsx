import { Button, Input } from "components/composites";
import { Card } from "components/elements";
import { useLoginFormHandler } from "./LoginFormHandler";
import "./styles.css";

export const LoginForm = () => {
  const formSettings = useLoginFormHandler();

  return (
    <Card className="login__form">
      <form onSubmit={formSettings.handleSubmit}>
        <fieldset className="login-form-fieldset">
          <legend className="login-form-legend">Ingrese sus credenciales</legend>
          <Input
            isClearable
            inputText="Usuario (contrato)"
            inputName="contract"
            formSettings={formSettings}
          />
          <Input
            isPassword
            inputText="Contraseña"
            inputName="password"
            formSettings={formSettings}
          />
        </fieldset>
        <Button className="login-form-button" type="submit" isLoading={formSettings.isSubmitting}>
          Iniciar Sesión
        </Button>
      </form>
    </Card>
  );
};
