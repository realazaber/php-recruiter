import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpgradeplanComponent } from './upgradeplan.component';

const routes: Routes = [{ path: '', component: UpgradeplanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpgradeplanRoutingModule { }
