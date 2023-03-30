import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditJobRoutingModule } from './edit-job-routing.module';
import { EditJobComponent } from './edit-job.component';


@NgModule({
  declarations: [
    EditJobComponent
  ],
  imports: [
    CommonModule,
    EditJobRoutingModule
  ]
})
export class EditJobModule { }
