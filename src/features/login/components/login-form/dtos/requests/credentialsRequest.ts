export interface CredentialsRequest {
  usernameOrEmail: string;
  password: string;
}

export const credentialsRequestEmpty: CredentialsRequest = {
  usernameOrEmail: "",
  password: "",
}