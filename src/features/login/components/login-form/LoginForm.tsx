import { Button, Input } from "application/components/elements";
import { useLoginFormHandler } from "./loginFormHandler";

export const LoginForm = () => {
  const credentialsForm = useLoginFormHandler();

  return (
    <div>
      <Input
        inputKey="usernameOrEmail"
        inputText="Usuario o Email"
        formSettings={credentialsForm}
      />
      <Input
        inputKey="password"
        inputText="Contraseña"
        formSettings={credentialsForm}
      />
      <Button>Hola mundo</Button>
    </div>
  );
};
