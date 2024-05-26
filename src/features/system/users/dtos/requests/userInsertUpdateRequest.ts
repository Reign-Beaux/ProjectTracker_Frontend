export interface UserInsertUpdateRequest {
  name: string;
  paternalLastname: string;
  maternalLastname: string;
  email: string;
}

export const userInsertUpdateEmpty: UserInsertUpdateRequest = {
  name: "",
  paternalLastname: "",
  maternalLastname: "",
  email: "",
};
