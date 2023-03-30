import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantsRoutingModule } from './applicants-routing.module';
import { ApplicantsComponent } from './applicants.component';


@NgModule({
  declarations: [
    ApplicantsComponent
  ],
  imports: [
    CommonModule,
    ApplicantsRoutingModule
  ]
})
export class ApplicantsModule { }
