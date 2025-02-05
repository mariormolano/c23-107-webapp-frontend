export interface Auth {
  username: string;
  password: string;
  status: Status;
}

export interface Status {
  token: string;
  loggedIn: boolean;
}