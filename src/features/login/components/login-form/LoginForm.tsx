import { Button, Input } from "components/composites";
import { Card } from "components/elements";
import { useLoginFormHandler } from "./LoginFormHandler";
import "./styles.css";

export const LoginForm = () => {
  const formSettings = useLoginFormHandler();

  return (
    <Card className="login__card">
      <h1 style={{ margin: "1rem 0" }}>Iniciar Sesión</h1>
      <form onSubmit={formSettings.handleSubmit}>
        <fieldset className="login__form--fieldset">
          <legend>Ingrese sus credenciales</legend>
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
        <Button
          className="login__card--button color-blue-1 button"
          type="submit"
          isLoading={formSettings.isSubmitting}>
          Iniciar Sesión
        </Button>
      </form>
    </Card>
  );
};
