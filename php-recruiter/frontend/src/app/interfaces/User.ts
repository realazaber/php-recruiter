export interface User {
  id: Number;
  name: String;
  companyName?: String;
  isRecruiter: Boolean;
  profileUrl: String;
  email: String;
  password: String;
  accountCreated: Date;
}
