import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';
import { PriceCardComponent } from 'src/app/components/price-card/price-card.component';


@NgModule({
  declarations: [
    PricingComponent,
    PriceCardComponent
  ],
  imports: [
    CommonModule,
    PricingRoutingModule
  ]
})
export class PricingModule { }
