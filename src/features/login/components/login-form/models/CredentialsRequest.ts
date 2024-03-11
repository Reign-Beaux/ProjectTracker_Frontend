export interface CredentialsRequest {
  contract: string;
  password: string;
}

export const credentialsRequestEmpty: CredentialsRequest = {
  contract: "",
  password: "",
}