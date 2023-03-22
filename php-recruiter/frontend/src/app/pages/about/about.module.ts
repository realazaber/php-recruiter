import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { TextAndImgComponent } from 'src/app/components/text-and-img/text-and-img.component';


@NgModule({
  declarations: [
    AboutComponent,
    TextAndImgComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
  ]
})
export class AboutModule { }
