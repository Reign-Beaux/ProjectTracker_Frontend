export interface UserTable {
  id: number;
  userName: string;
  email: string;
  name: string;
  paternalLastname: string;
  maternalLastnam: string;
}

export const userTableEmpty: UserTable = {
  id: 0,
  userName: "",
  email: "",
  name: "",
  paternalLastname: "",
  maternalLastnam: "",
};
