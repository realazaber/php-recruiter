export interface User {
  id: Number;
  fname: String;
  lname: String;
  website?: String;
  bio: String;
  company_name?: String;
  is_recruiter: Boolean;
  profile_url?: String;
  email: String;
  password: String;
  created_at: Date;
}
