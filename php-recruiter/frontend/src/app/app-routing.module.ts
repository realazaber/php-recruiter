import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: "home", pathMatch: "full"},
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
  { path: 'jobs', loadChildren: () => import('./pages/jobs/jobs.module').then(m => m.JobsModule) },
  { path: 'job/:id', loadChildren: () => import('./pages/job/job.module').then(m => m.JobModule) },
  { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'pricing', loadChildren: () => import('./pages/pricing/pricing.module').then(m => m.PricingModule) },
  { path: 'employers', loadChildren: () => import('./pages/employers/employers.module').then(m => m.EmployersModule) },
  { path: 'employer/:id', loadChildren: () => import('./pages/employer/employer.module').then(m => m.EmployerModule) },
  { path: 'profile', loadChildren: () => import('./pages/auth/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'postjob', loadChildren: () => import('./pages/auth/post-job/post-job.module').then(m => m.PostJobModule) },
  { path: 'editjob', loadChildren: () => import('./pages/auth/edit-job/edit-job.module').then(m => m.EditJobModule) },
  { path: 'upgradeplan', loadChildren: () => import('./pages/auth/upgradeplan/upgradeplan.module').then(m => m.UpgradeplanModule) },
  { path: 'dashboard', loadChildren: () => import('./pages/auth/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'applicants', loadChildren: () => import('./pages/auth/applicants/applicants.module').then(m => m.ApplicantsModule) },
  { path: 'editprofile', loadChildren: () => import('./pages/auth/editprofile/editprofile.module').then(m => m.EditprofileModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
