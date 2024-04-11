import { useLoginFormHandler } from "./loginFormHandler";

export const LoginForm = () => {
  const credentialsForm = useLoginFormHandler();

  return (
    <div>LoginForm Working!!!</div>
  );
};
