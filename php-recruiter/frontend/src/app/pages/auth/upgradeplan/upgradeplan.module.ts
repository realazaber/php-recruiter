import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpgradeplanRoutingModule } from './upgradeplan-routing.module';
import { UpgradeplanComponent } from './upgradeplan.component';


@NgModule({
  declarations: [
    UpgradeplanComponent
  ],
  imports: [
    CommonModule,
    UpgradeplanRoutingModule
  ]
})
export class UpgradeplanModule { }
