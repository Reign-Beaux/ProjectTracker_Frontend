export interface CredentialsRequest {
  user: string;
  password: string;
}

export const credentialsRequestEmpty: CredentialsRequest = {
  user: "",
  password: "",
}