export interface Job {
  id: Number;
  title: String;
  companyName: String;
  companyLogo: String;
  description: String;
  category: String;
  salaryMin: Number;
  salaryMax: Number;
  currency: String;
  posterId: Number;
  createdAt: Date;
}
