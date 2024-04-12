import { Typography } from "@mui/material";
import { Button, Card, Input, InputPassword } from "application/components/elements";
import { useLoginFormHandler } from "./loginFormHandler";
import "./styles.css";

export const LoginForm = () => {
  const credentialsForm = useLoginFormHandler();

  return (
    <main className="login-form__main">
      <Card className="login-form__card">
        <Typography gutterBottom variant="h5" component="div">
          Iniciar sesión
        </Typography>
        <form onSubmit={credentialsForm.handleSubmit}>
          <Input
            inputKey="usernameOrEmail"
            inputText="Usuario o Email"
            formSettings={credentialsForm}
          />
          <InputPassword
            inputKey="password"
            inputText="Contraseña"
            formSettings={credentialsForm}
          />
          <Button className="login-form__button" type="submit">
            Acceder
          </Button>
        </form>
      </Card>
    </main>
  );
};
