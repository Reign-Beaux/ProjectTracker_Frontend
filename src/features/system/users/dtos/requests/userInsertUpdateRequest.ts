export interface UserInsertUpdateRequest {
  id: number;
  name: string;
  paternalLastname: string;
  maternalLastname: string;
  email: string;
  password: string;
}

export const userInsertUpdateEmpty: UserInsertUpdateRequest = {
  id: 0,
  name: "",
  paternalLastname: "",
  maternalLastname: "",
  email: "",
  password: "",
};
