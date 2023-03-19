import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { JobPostComponent } from 'src/app/components/job-post/job-post.component';


@NgModule({
  declarations: [
    JobsComponent,
    JobPostComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule
  ]
})
export class JobsModule { }
