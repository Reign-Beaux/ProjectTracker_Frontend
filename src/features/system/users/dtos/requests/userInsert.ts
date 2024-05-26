export interface UserInsert {
  name: string;
  paternalLastname: string;
  maternalLastname: string;
  email: string;
}

export const userInsertEmpty: UserInsert = {
  name: "",
  paternalLastname: "",
  maternalLastname: "",
  email: "",
};
