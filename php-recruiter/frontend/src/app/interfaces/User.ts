export interface User {
  id: Number;
  name: String;
  company_name?: String;
  is_recruiter: Boolean;
  profile_url?: String;
  email: String;
  password: String;
  accountCreated: Date;
}
