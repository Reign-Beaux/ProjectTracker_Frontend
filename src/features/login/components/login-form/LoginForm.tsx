import { Button, Card, Input, InputPassword } from "application/components/elements";
import { useLoginFormHandler } from "./loginFormHandler";

export const LoginForm = () => {
  const credentialsForm = useLoginFormHandler();

  return (
    <Card>
      <Input
        inputKey="usernameOrEmail"
        inputText="Usuario o Email"
        formSettings={credentialsForm}
      />
      <InputPassword inputKey="password" inputText="Contraseña" formSettings={credentialsForm} />
      <Button>Acceder</Button>
    </Card>
  );
};
