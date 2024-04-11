import { useLoginFormHandler } from "./loginFormHandler";
import "./styles.css";

export const LoginForm = () => {
  const credentialsForm = useLoginFormHandler();

  return (
    <h1>LoginForm Working!!!</h1>
    // <Card className="login__card">
    //   <div style={{ textAlign: "center" }}>
    //     <h1 style={{ margin: "1rem 0" }}>Iniciar Sesión</h1>
    //   </div>
    //   <form id="credentials-form" onSubmit={credentialsForm.handleSubmit}>
    //     <fieldset className="login__form--fieldset">
    //       <legend>Ingrese sus credenciales</legend>
    //       <Input
    //         // isClearable
    //         inputText="Usuario o Correo electrónico"
    //         inputKey="usernameOrEmail"
    //         formSettings={credentialsForm}
    //       />
    //       <Input
    //         // isPassword
    //         inputText="Contraseña"
    //         inputKey="password"
    //         formSettings={credentialsForm}
    //       />
    //     </fieldset>
    //     <Button
    //       className="login__card--button color-blue-1 button"
    //       type="submit"
    //       isLoading={credentialsForm.isSubmitting}>
    //       Iniciar Sesión
    //     </Button>
    //   </form>
    // </Card>
  );
};
