import { Button, Card, Input } from "application/components/elements";
import { useLoginFormHandler } from "./loginFormHandler";
import "./styles.css";

export const LoginForm = () => {
  const credentialsForm = useLoginFormHandler();

  return (
    <Card className="login__card">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ margin: "1rem 0" }}>Iniciar Sesión</h1>
      </div>
      <form id="credentials-form" onSubmit={credentialsForm.handleSubmit}>
        <fieldset className="login__form--fieldset">
          <legend>Ingrese sus credenciales</legend>
          <Input
            isClearable
            inputText="Usuario o Correo electrónico"
            inputName="usernameOrEmail"
            formSettings={credentialsForm}
          />
          <Input
            isPassword
            inputText="Contraseña"
            inputName="password"
            formSettings={credentialsForm}
          />
        </fieldset>
        <Button
          className="login__card--button color-blue-1 button"
          type="submit"
          isLoading={credentialsForm.isSubmitting}>
          Iniciar Sesión
        </Button>
      </form>
    </Card>
  );
};
