export interface Job {
  id: Number;
  title: String;
  company_name: String;
  company_logo_path: String;
  description: String;
  category: String;
  salary_min: Number;
  salary_max: Number;
  currency: String;
  posterId: Number;
  createdAt: Date;
}
