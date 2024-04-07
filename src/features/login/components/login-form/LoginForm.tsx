import { Button, Card, Input } from "application/components/elements";
import { useLoginFormHandler } from "./loginFormHandler";
import "./styles.css";

export const LoginForm = () => {
  const formSettings = useLoginFormHandler();

  return (
    <Card className="login__card">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ margin: "1rem 0" }}>Iniciar Sesión</h1>
      </div>
      <form onSubmit={formSettings.handleSubmit}>
        <fieldset className="login__form--fieldset">
          <legend>Ingrese sus credenciales</legend>
          <Input
            isClearable
            inputText="Usuario o Correo electrónico"
            inputName="usernameOrEmail"
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
