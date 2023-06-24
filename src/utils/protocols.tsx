export interface UserData {
  token?: string;
  cart?: any[]; //this element must be changed to its actual type
}

export type SignInParams = {
  email: string;
  password: string;
};

export type Machine = {
  id: number;
  name: string;
};