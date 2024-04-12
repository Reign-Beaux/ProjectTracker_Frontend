import { Button, Card, Input, InputPassword } from "application/components/elements";
import { useLoginFormHandler } from "./loginFormHandler";
import "./styles.css";

export const LoginForm = () => {
  const credentialsForm = useLoginFormHandler();

  return (
    <main className="login-form__main">
      <Card>
        <Input
          inputKey="usernameOrEmail"
          inputText="Usuario o Email"
          formSettings={credentialsForm}
        />
        <InputPassword inputKey="password" inputText="Contraseña" formSettings={credentialsForm} />
        <Button>Acceder</Button>
      </Card>
    </main>
  );
};
