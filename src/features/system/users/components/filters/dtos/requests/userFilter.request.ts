export interface UserFilter {
  userName: string;
  name: string;
  email: string;
  paternalLastname: string;
  maternalLastname: string;
}

export const userFilterEmpty: UserFilter = {
  userName: "",
  name: "",
  email: "",
  paternalLastname: "",
  maternalLastname: "",
};
